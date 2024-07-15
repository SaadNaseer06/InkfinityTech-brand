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

// echo "sfhbgsdjghjsdhg";
// die();

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
    $projectType = $_POST['project_type'];
    $projectBudget = $_POST['project_budget'];
    $howDidYouHearAboutUs = $_POST['how_did_you_hear_about_us'];
    $message = $_POST['message'];
    $ip = $ipAddress;
    $get_country = $country;

    // Prepare and bind SQL statement
    $stmt = $conn->prepare("INSERT INTO quote (name, email, phone, organization, project_type, project_budget ,hear_about_us, description ,ip, country) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssssss", $name, $email, $phone, $company, $projectType, $projectBudget, $howDidYouHearAboutUs , $message, $ip, $get_country);

    // Execute the statement
    if ($stmt->execute()) {
        echo "Form data saved successfully.";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close statement and connection
    $stmt->close();
    $conn->close();
}
