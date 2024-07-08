<?php
function get_IP_address()
{
    foreach (array(
        'HTTP_CLIENT_IP',
        'HTTP_X_FORWARDED_FOR',
        'HTTP_X_FORWARDED',
        'HTTP_X_CLUSTER_CLIENT_IP',
        'HTTP_FORWARDED_FOR',
        'HTTP_FORWARDED',
        'REMOTE_ADDR'
    ) as $key) {
        if (array_key_exists($key, $_SERVER) === true) {
            foreach (explode(',', $_SERVER[$key]) as $IPaddress) {
                $IPaddress = trim($IPaddress); // Just to be safe

                if (
                    filter_var(
                        $IPaddress,
                        FILTER_VALIDATE_IP,
                        FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE
                    )
                    !== false
                ) {

                    return $IPaddress;
                }
            }
        }
    }
}

$ip = get_IP_address();

$loc = file_get_contents("http://ip-api.com/json/$ip");
$loc_data = json_decode($loc, true); // Decode JSON string into an associative array

if ($loc_data && isset($loc_data['country'])) {
    global $country;
    global $ipAddress;
    $country = $loc_data['country'];
    $ipAddress = $loc_data['query'];
}

// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "brand";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Form submission handling
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $company = $_POST['company'];
    $message = $_POST['message'];
    $ip = $ipAddress;
    $get_country = $country;

    // Prepare and bind SQL statement
    $stmt = $conn->prepare("INSERT INTO hello (name, email, phone, company, description, ip, country) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssss", $name, $email, $phone, $company, $message, $ip, $get_country);

    // Execute the statement
    if ($stmt->execute()) {
        // Send email to admin
        $to = "saadnaseeroffice@gmail.com"; // Replace with your admin's email address
        $subject = "New Form Submission";
        $message = "A new form submission has been received.\n\n";
        $message .= "Name: " . $name . "\n";
        $message .= "Email: " . $email . "\n";
        $message .= "Phone: " . $phone . "\n";
        $message .= "Company: " . $company . "\n";
        $message .= "Message: " . $message . "\n";
        $message .= "IP Address: " . $ip . "\n";
        $message .= "Country: " . $get_country . "\n";
        
        
        // Send email
        if (mail($to, $subject, $message)) {
            echo "Form data saved successfully and email sent to admin.";
        } else {
            echo "Error sending email.";
        }
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close statement and connection
    $stmt->close();
    $conn->close();
}

