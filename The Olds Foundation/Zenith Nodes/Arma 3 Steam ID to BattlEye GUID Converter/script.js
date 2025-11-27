var uid2guid = function(uid) {
  if (!uid) {
    return;
  }
  
  var steamId = bigInt(uid);

  var parts = [0x42,0x45,0,0,0,0,0,0,0,0];

  for (var i = 2; i < 10; i++) {
    var res = steamId.divmod(256);
    steamId = res.quotient; 
    parts[i] = res.remainder.toJSNumber();
  }

  var wordArray = CryptoJS.lib.WordArray.create(new Uint8Array(parts));
  var hash = CryptoJS.MD5(wordArray);
  return hash.toString();
};

$("#convert").click(function() {
  var uid = $("#uid").val();
  $("#guid").val(uid2guid(uid));
});

// These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
https://github.com/AshrafMorningstar