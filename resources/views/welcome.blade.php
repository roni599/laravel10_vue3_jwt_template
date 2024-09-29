<!DOCTYPE html>
<html lang="en">
<!-- [Head] start -->

<head>
    <title>Laptop_Paradise</title>
    <!-- [Meta] -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description"
        content="Gradient Able is trending dashboard template made using Bootstrap 5 design framework. Gradient Able is available in Bootstrap, React, CodeIgniter, Angular,  and .net Technologies.">
    <meta name="keywords"
        content="Bootstrap admin template, Dashboard UI Kit, Dashboard Template, Backend Panel, react dashboard, angular dashboard">
    <meta name="author" content="codedthemes">

    <!-- [Favicon] icon -->
    <link rel="icon" href="{{ asset('Admin') }}/assets/images/favicon.svg" type="image/x-icon">
    <!-- map-vector css -->
    <link rel="stylesheet" href="{{ asset('Admin') }}/assets/css/plugins/jsvectormap.min.css">
    <link rel="stylesheet" href="{{ asset('Admin') }}/assets/css/plugins/bootstrap.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <!-- [Google Font : Poppins] icon -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">

    <!-- [Tabler Icons] https://tablericons.com -->
    <link rel="stylesheet" href="{{ asset('Admin') }}/assets/fonts/tabler-icons.min.css">
    <!-- [Feather Icons] https://feathericons.com -->
    <link rel="stylesheet" href="{{ asset('Admin') }}/assets/fonts/feather.css">
    <!-- [Material Icons] https://fonts.google.com/icons -->
    <link rel="stylesheet" href="{{ asset('Admin') }}/assets/fonts/material.css">
    <!-- [Template CSS Files] -->
    <link rel="stylesheet" href="{{ asset('Admin') }}/assets/css/style.css" id="main-style-link">
    <link rel="stylesheet" href="{{ asset('Admin') }}/assets/css/style-preset.css">
    <link href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css" rel="stylesheet">
    @vite('resources/css/app.css')
</head>
<!-- [Head] end -->
<!-- [Body] Start -->

<body data-pc-header="header-1" data-pc-preset="preset-1" data-pc-sidebar-theme="light" data-pc-sidebar-caption="true" data-pc-direction="ltr" data-pc-theme="light">
    <!-- [ Pre-loader ] start -->
    <div id="app"></div>
    <!-- [Page Specific JS] start -->
    @vite('resources/js/app.js')
    <script src="{{ asset('Admin') }}/assets/js/plugins/apexcharts.min.js"></script>
    <script src="{{ asset('Admin') }}/assets/js/plugins/jsvectormap.min.js"></script>
    <script src="{{ asset('Admin') }}/assets/js/plugins/world.js"></script>
    <script src="{{ asset('Admin') }}/assets/js/plugins/world-merc.js"></script>
    <script src="{{ asset('Admin') }}/assets/js/pages/dashboard-sales.js"></script>
    <!-- [Page Specific JS] end -->
    <!-- Required Js -->
    <script src="{{ asset('Admin') }}/assets/js/plugins/popper.min.js"></script>
    <script src="{{ asset('Admin') }}/assets/js/plugins/simplebar.min.js"></script>
    <script src="{{ asset('Admin') }}/assets/js/plugins/bootstrap.min.js"></script>
    <script src="{{ asset('Admin') }}/assets/js/fonts/custom-font.js"></script>
    <script src="{{ asset('Admin') }}/assets/js/pcoded.js"></script>
    <script src="{{ asset('Admin') }}/assets/js/plugins/feather.min.js"></script>
    <script>layout_change('light');</script>
    <script>layout_sidebar_change('light');</script>
    <script>change_box_container('false');</script>
    <script>layout_caption_change('true');</script>
    <script>layout_rtl_change('false');</script>
    <script>preset_change("preset-1");</script>
    <script>header_change("header-1");</script>
</body>
<!-- [Body] end -->

</html>
