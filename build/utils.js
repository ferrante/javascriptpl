exports.createSlug = function(str){
   return str.replace(/[^A-Za-z0-9-]+/g, '-');
};

exports.removeAccent = function(str) {
    var map = {
        'ą' : 'a',
        'ę' : 'e',
        'ć' : 'c',
        'ó' : 'o',
        'ł' : 'l',
        'ż': 'z',
        'ź' : 'z',
        'ń': 'n',
        'ś': 's'
    };
    return str.replace(/[^A-Za-z0-9\[\] ]/g, function(a) {
        if (a in map) {
            return map[a];
        } else if (a.toLowerCase() in map) {
            return map[a].toUpperCase();
        } else {
            return "";
        }
    });
};