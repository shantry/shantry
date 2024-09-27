let mediaRecorder;
let audioChunks = [];
let audioBlob;
let wavesurfer;

// Initialize WaveSurfer instance
document.addEventListener('DOMContentLoaded', () => {
    wavesurfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: 'violet',
        progressColor: 'purple',
        cursorColor: 'navy',
        backend: 'WebAudio',
        height: 200,
        responsive: true
    });

    // Enable region selection
    wavesurfer.enableDragSelection({
        color: 'rgba(0, 255, 0, 0.1)'
    });
});

const recordButton = document.getElementById('recordButton');
const stopButton = document.getElementById('stopButton');
const playButton = document.getElementById('playButton');
const cutButton = document.getElementById('cutButton');
const exportButton = document.getElementById('exportButton');

recordButton.addEventListener('click', () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.start();

            recordButton.disabled = true;
            stopButton.disabled = false;

            mediaRecorder.ondataavailable = event => {
                audioChunks.push(event.data);
            };

            mediaRecorder.onstop = () => {
                audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                const audioUrl = URL.createObjectURL(audioBlob);

                wavesurfer.load(audioUrl);

                stopButton.disabled = true;
                playButton.disabled = false;
                cutButton.disabled = false;
                exportButton.disabled = false;
            };
        });
});

stopButton.addEventListener('click', () => {
    mediaRecorder.stop();
});

playButton.addEventListener('click', () => {
    wavesurfer.playPause();
});

cutButton.addEventListener('click', () => {
    const regions = wavesurfer.regions.list;
    if (Object.keys(regions).length === 0) {
        alert("Please select a region to cut.");
        return;
    }

    for (let regionId in regions) {
        const region = regions[regionId];
        const start = region.start;
        const end = region.end;

        wavesurfer.addRegion({
            start: 0,
            end: start,
            loop: false,
            color: 'rgba(255, 0, 0, 0.1)'
        });

        wavesurfer.addRegion({
            start: end,
            end: wavesurfer.getDuration(),
            loop: false,
            color: 'rgba(0, 0, 255, 0.1)'
        });

        region.remove();
    }

    wavesurfer.clearRegions();

    // Process the cut audio and update waveform
    trimAudio(wavesurfer);
});

function trimAudio(wavesurfer) {
    const originalBuffer = wavesurfer.backend.buffer;
    const region = wavesurfer.regions.list[Object.keys(wavesurfer.regions.list)[0]];

    if (!region) return;

    const start = region.start;
    const end = region.end;
    const sampleRate = originalBuffer.sampleRate;

    const trimmedBuffer = wavesurfer.backend.ac.createBuffer(
        originalBuffer.numberOfChannels,
        (end - start) * sampleRate,
        sampleRate
    );

    for (let i = 0; i < originalBuffer.numberOfChannels; i++) {
        trimmedBuffer.copyToChannel(
            originalBuffer.getChannelData(i).slice(
                start * sampleRate,
                end * sampleRate
            ),
            i
        );
    }

    const audioBlob = bufferToWave(trimmedBuffer);
    const audioUrl = URL.createObjectURL(audioBlob);

    wavesurfer.load(audioUrl);
}

exportButton.addEventListener('click', () => {
    const audioBlob = bufferToWave(wavesurfer.backend.buffer);
    const audioUrl = URL.createObjectURL(audioBlob);

    const link = document.createElement('a');
    link.href = audioUrl;
    link.download = 'edited_audio.wav';
    link.click();
});

function bufferToWave(buffer) {
    const numberOfChannels = buffer.numberOfChannels;
    const length = buffer.length * numberOfChannels * 2 + 44;
    const arrayBuffer = new ArrayBuffer(length);
    const view = new DataView(arrayBuffer);

    // RIFF chunk descriptor
    writeString(view, 0, 'RIFF');
    view.setUint32(4, 36 + buffer.length * numberOfChannels * 2, true);
    writeString(view, 8, 'WAVE');

    // fmt sub-chunk
    writeString(view, 12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, numberOfChannels, true);
    view.setUint32(24, buffer.sampleRate, true);
    view.setUint32(28, buffer.sampleRate * numberOfChannels * 2, true);
    view.setUint16(32, numberOfChannels * 2, true);
    view.setUint16(34, 16, true);

    // data sub-chunk
    writeString(view, 36, 'data');
    view.setUint32(40, buffer.length * numberOfChannels * 2, true);

    let offset = 44;
    for (let i = 0; i < buffer.length; i++) {
        for (let channel = 0; channel < numberOfChannels; channel++) {
            let sample = buffer.getChannelData(channel)[i] * 0x7FFF;
            view.setInt16(offset, sample < 0 ? sample : sample, true);
            offset += 2;
        }
    }

    return new Blob([view], { type: 'audio/wav' });
}

function writeString(view, offset, string) {
    for (let i = 0; i < string.length; i++) {
        view.setUint8(offset + i, string.charCodeAt(i));
    }
}
