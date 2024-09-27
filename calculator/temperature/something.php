<?php
// Connect to database (replace host, username, password, and database_name with your values)
$conn = mysqli_connect("host", "username", "password", "database_name");

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Prepare statement to insert new post
$stmt = $conn->prepare("INSERT INTO posts (title, content) VALUES (?, ?)");

// Bind parameters and execute statement
$stmt->bind_param("ss", $title, $content);

$title = $_POST['post_title'];
$content = $_POST['post_content'];
$stmt->execute();

// Close statement and database connection
$stmt->close();
$conn->close();

// Redirect back to the form page
header("Location: form.html");
exit();
?>
`