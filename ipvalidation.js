        function verificarUbicacion() {
            axios.get('https://ipapi.co/json/')
                .then(function (response) {
                    var country = response.data.country;

                    
                    if (country !== 'MX') {
                        
                        window.location.href = 'https://google.com';
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        window.onload = function () {
            verificarUbicacion();
        };