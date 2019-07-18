  <script src='node_modules/jquery/dist/jquery.min.js'></script>
        $(document).ready(function () {
            $("#CompanyName").fadeIn(2000);
            $("#text").fadeIn(4000);
            $('#HomeContent').fadeIn(4100);


            $("#FirstEmployee").hover(function () {
                $("#PicEmployee1").fadeOut("slow");
                $("#dani").show();
            },
                function () {
                    $("#PicEmployee1").fadeIn("slow");
                    $("#dani").hide();
                });


            $("#SecondEmployee").hover(function () {
                $("#PicEmployee2").fadeOut("slow");
                $("#moshe").show();

            },
                function () {
                    $("#PicEmployee2").fadeIn("slow");
                    $("#moshe").hide();
                });


            $("#ThirdEmployee").hover(function () {
                $("#PicEmployee3").fadeOut("slow");
                $("#hanoh").show();
            },
                function () {
                    $("#PicEmployee3").fadeIn("slow");
                    $("#hanoh").hide();
                });
        });