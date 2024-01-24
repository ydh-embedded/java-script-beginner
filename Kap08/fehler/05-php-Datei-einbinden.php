<!DOCTYPE html>
<html lang="de">

<head>
  <meta charset="utf-8">
  <title>Ausnahmen werfen</title>
  <link rel="stylesheet" href="../lib/css/js4.css">
</head>

<body>
  <p>
    <?php         $phpZahl = -5 ;    ?>


    <script>

    const zahl =  <?= $phpZahl ; ?>   ;

    try {
        if(isNaN(zahl)) {
            throw " Keine gültige Zahl";
        }
        if(zahl <= 0) {
            throw " keine gültige Zahl";
        }
        document.write(zahl);
    } catch(e) {
        console.log(e);
    }
    


    </script>
  </p>
</body>

</html>