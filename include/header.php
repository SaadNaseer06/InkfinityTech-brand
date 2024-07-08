<?php
function get_IP_address()
{
    foreach (array('HTTP_CLIENT_IP',
                   'HTTP_X_FORWARDED_FOR',
                   'HTTP_X_FORWARDED',
                   'HTTP_X_CLUSTER_CLIENT_IP',
                   'HTTP_FORWARDED_FOR',
                   'HTTP_FORWARDED',
                   'REMOTE_ADDR') as $key){
        if (array_key_exists($key, $_SERVER) === true){
            foreach (explode(',', $_SERVER[$key]) as $IPaddress){
                $IPaddress = trim($IPaddress); // Just to be safe

                if (filter_var($IPaddress,
                               FILTER_VALIDATE_IP,
                               FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE)
                    !== false) {

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


?>
<!DOCTYPE html>
<html lang="en">
<!-- Mirrored from Inkfinity Tech.com/about by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 06 May 2024 17:14:47 GMT -->
<!-- Added by HTTrack -->
<meta http-equiv="content-type" content="text/html;charset=utf-8" /><!-- /Added by HTTrack -->

<head>
    <meta name="viewport" content="width=device-width" />
    <link rel="icon" href="http://localhost/brand/favicon.svg" />
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Inkfinity Tech | About Us</title>
    <meta name="description" content="Inkfinity Tech® - Crafting Tailored Solutions in Web, Mobile, Software Design and Development." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="index.html" />
    <meta property="og:title" content="Inkfinity Tech | About Us" />
    <meta property="og:description" content="Inkfinity Tech® - Crafting Tailored Solutions in Web, Mobile, Software Design and Development." />
    <meta property="og:image" content="http://localhost/brand/_next/static/media/Inkfinity Tech-logo.a737ca31.png" />
    <meta property="og:site_name" content="Inkfinity Tech®" />
    <meta property="og:copyright" content="hello@Inkfinity Tech.com" />
    <meta name="twitter:site" content="@Inkfinity Tech_design" />
    <meta name="HandheldFriendly" content="True" />
    <meta name="theme-color" content="#000000" />
    <link rel="apple-touch-icon" sizes="57x57" href="http://localhost/brand/_next/static/media/apple-touch-icon-57x57.0d7f70a8.png" />
    <link rel="apple-touch-icon" sizes="60x60" href="http://localhost/brand/_next/static/media/apple-touch-icon-60x60.51b5eff2.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="http://localhost/brand/_next/static/media/apple-touch-icon-72x72.63eb2b39.png" />
    <link rel="apple-touch-icon" sizes="76x76" href="http://localhost/brand/_next/static/media/apple-touch-icon-76x76.3f61f6ca.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="http://localhost/brand/_next/static/media/apple-touch-icon-114x114.c3eb217f.png" />
    <link rel="apple-touch-icon" sizes="120x120" href="http://localhost/brand/_next/static/media/apple-touch-icon-120x120.c5031803.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="http://localhost/brand/_next/static/media/apple-touch-icon-144x144.8c90c2f7.png" />
    <link rel="apple-touch-icon" sizes="152x152" href="http://localhost/brand/_next/static/media/apple-touch-icon-152x152.5e11a0eb.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="http://localhost/brand/_next/static/media/apple-touch-icon-180x180.ff2c4ba1.png" />
    <meta name="next-head-count" content="25" />
    <link rel="preload" href="_next/static/css/e10b8ab67b6fe656.css" as="style" crossorigin="" />
    <link rel="stylesheet" href="_next/static/css/e10b8ab67b6fe656.css" crossorigin="" data-n-g="" />
    <noscript data-n-css=""></noscript>
    <script defer="" crossorigin="" nomodule="" src="http://localhost/brand/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js"></script>
    <script src="http://localhost/brand/_next/static/chunks/webpack-1e9d3f973bd7f51f.js" defer="" crossorigin=""></script>
    <script src="http://localhost/brand/_next/static/chunks/framework-5429a50ba5373c56.js" defer="" crossorigin=""></script>
    <script src="http://localhost/brand/_next/static/chunks/main-18a986b8471251f8.js" defer="" crossorigin=""></script>
    <script src="http://localhost/brand/_next/static/chunks/pages/_app-79735ddd282671a4.js" defer="" crossorigin=""></script>
    <script src="http://localhost/brand/_next/static/chunks/bd1a647f-53d864059a610ebb.js" defer="" crossorigin=""></script>
    <script src="http://localhost/brand/_next/static/chunks/732-25e5734f28f3ddf3.js" defer="" crossorigin=""></script>
    <script src="http://localhost/brand/_next/static/chunks/556-a5a7849e6ff32cdc.js" defer="" crossorigin=""></script>
    <script src="http://localhost/brand/_next/static/chunks/pages/index-7eda3f11724d2895.js" defer="" crossorigin=""></script>
    <script src="http://localhost/brand/_next/static/chunks/pages/about-e61f0020718e47a3.js" defer="" crossorigin=""></script>
    <script src="http://localhost/brand/_next/static/chunks/pages/work-1497f908159d1fb2.js" defer="" crossorigin=""></script>
    <script src="http://localhost/brand/_next/static/chunks/pages/contact-f622856c14fc28d4.js" defer="" crossorigin=""></script>
    <script src="http://localhost/brand/_next/static/chunks/pages/services-88b32763006ca7e2.js" defer="" crossorigin=""></script>
    <script src="http://localhost/brand/_next/static/chunks/pages/team-abfbeb50b94ccb87.js" defer="" crossorigin=""></script>
    <script src="http://localhost/brand/_next/static/chunks/pages/namestory-6a8890a81e66a956.js" defer="" crossorigin=""></script>
    <script src="http://localhost/brand/_next/static/v5dj4HziY3LCUzDk_s_NG/_buildManifest.js" defer="" crossorigin=""></script>
    <script src="http://localhost/brand/_next/static/v5dj4HziY3LCUzDk_s_NG/_ssgManifest.js" defer="" crossorigin=""></script>
</head>