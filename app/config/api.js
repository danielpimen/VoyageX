



////////////////////////////////////////////

  let token;
    let url = "http://api.astronomyapi.org"
    let app_params = {
        app_id: '7149c9e1-7e48-4fac-994c-e5b8bebf7a46',
        app_secret: '7958ad340cdb2aee31610e690bba99fcc9a9b360'
    };

    $.ajaxPrefilter(function(options) {
        if (options.crossDomain && jQuery.support.cors) {
            var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
            options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
            //options.url = "http://cors.corsproxy.io/url=" + options.url;
        }
    });

    function authenticate() {
        return $.ajax({
            method: 'GET',
            url: 'http://api.astronomyapi.org/auth',
            data: app_params
        }).then(function(response) {
            token = response.data.token;
        });
    }

    function getPositions() {
        return authenticate().then(function() {
            $.ajax({
                method: 'GET',
                url: 'http://api.astronomyapi.org/positions',
                data: {
                    lat: 33.60,
                    lon: -84.37,
                    from_year: 2018,
                    from_month: 2,
                    from_day: 24,
                    to_year: 2018,
                    to_month: 2,
                    to_day: 24
                },
                headers: { 'Authorization': 'Bearer ' + token }
            }).then(function(response) {
                console.log(response);
                getDistances(response.data);
            });
        })
    }

    function getDistances(data) {
        data.table.rows.forEach(row => {
            const name = row.entry.name;
            row.cells.forEach(cell => {
                const date = cell.date;
                console.log(`Distance of ${name} from Earth in km: ${cell.distance.from_earth.km}`);
            });
        });
    }

module.exports = getDistances;