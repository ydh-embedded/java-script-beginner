<!-- Sanitize.css reset -->
<link href="https://unpkg.com/sanitize.css" rel="stylesheet" />
<!-- Latest release version of Simple.css -->
<link rel="stylesheet" href="https://unpkg.com/simpledotcss/simple.css">

<!--link rel="stylesheet" href="https://unpkg.com/mvp.css"-->

<!--link rel="stylesheet" href="https://raw.githubusercontent.com/vereis/generic.css/master/css/generic.css"-->

<!--link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/open-fonts@1.1.1/fonts/inter.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css"-->

<style>
    :root {
        color-scheme: dark;
    }

    header {
        background: url("/background.jpeg");
        background-repeat: no-repeat;
        background-size: 100vw 100%;
        height: 200pt;
    }

    header nav {
        position: relative;
        top: 150pt;
    }

    nav a,
    header h1 {
        display: inline-block;
        background: #333;
        color: #fff;
    }

    header h1 {
        display: none;
    }

    mark {
        font-size: 52pt;
    }

    .category-head {
        float: right;
    }

    .w-5.h-5 {
        width: 30pt;
        height: 30pt;
    }

    .shopping-grid {
        /*columns: 3;*/
        border-top: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1ch;

        &>article {
            flex: 1 1 30%;
        }
    }

    article.preview {
        width: 30%;
        break-inside: avoid-column;
        page-break-inside: avoid;
        border: 0;
        background: radial-gradient(#111, #333);
    }

    article.preview a {
        text-decoration: none;
    }

    article.preview h5 {
        margin: 2pt;
    }

    footer {
        height: 200pt;
        background: #111;
        color: white;
    }

    input[type=submit].warning {
        background: #d85;

        & :hover {
            background: #e94;
        }
    }

    img {
        animation: wankeln 4s linear infinite;
    }

    .preview a img:hover {
        animation: swirl 1s linear infinite !important;
    }

    .alert {
        padding: 1ch;
        border: 1px solid #765;
        border-left-width: 2ch;
        margin: 1ch;
    }

    .alert.alert-success {
        border-color: green;
    }

    @keyframes swirl {
        0% {
            rotate: 0deg;
            border-radius: 0pt;
        }

        50% {
            rotate: 360deg;
            border-radius: 40pt;
        }

        90% {
            rotate: 720deg;
            border-radius: 60pt;
        }

        90% {
            rotate: 360deg;
            border-radius: 5pt;
        }
    }

    @keyframes wankeln {
        0% {
            rotate: 0deg;
        }

        25% {
            rotate: 2deg;
        }

        75% {
            rotate: -2deg;
        }

        100% {
            rotate: 0deg;
        }
    }
</style>