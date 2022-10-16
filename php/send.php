<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    body {
        height: 100vh;
        background: linear-gradient(315.75deg, rgba(254, 210, 144, 0.7) 30.06%, #febdab 100.95%, rgba(254, 210, 144, 0.7) 106.36%), linear-gradient(315.75deg, rgba(254, 189, 171, 0.74) 30.06%, rgba(243, 169, 248, 0.66) 50.74%, #e0d8f0 80.49%, #eaf7fe 127.9%, #eaf7fe 149.54%), linear-gradient(315.75deg, rgba(254, 189, 171, 0.74) 30.06%, rgba(243, 169, 248, 0.66) 50.74%, #e0d8f0 80.49%, #eaf7fe 127.9%, #eaf7fe 149.54%);
        opacity: .9;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .send {
        width: fit-content;
        background: rgba(253, 253, 255, .5215686275);
        backdrop-filter: blur(2px);
        border-radius: 20px;
        padding: 41px 30px 59px 30px;
        text-align: center;
    }

    .thanks {
        font-weight: 400;
        font-size: 48px;
        line-height: 58px;
        text-align: center;
        color: #fe9013;
    }

    .email {
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        color: #333b41;
    }
</style>

<body>
    <div class="send">
        <?php
        if (isset($_POST)) {
            echo '<p class="thanks">Thanks for the donation</p>';
            echo '<br>';
            print('<p class="email">Your sum: ' . $_POST['currency'] . '</p>');
        }
        ?>
    </div>

</body>

</html>