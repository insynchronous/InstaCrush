const remote = require("electron").remote;

function minimize() {
  var window = remote.getCurrentWindow();
  window.minimize();
}

function close_win() {
  var window = remote.getCurrentWindow();
  window.close();
}

function remotePythonExecution() {
  if (!document.getElementById("userdetailplane").classList.contains("hide")) {
    document.getElementById("userdetailplane").classList.add("hide");
  }
  document.getElementById("loaderimage").classList.remove("hide");
  searchUsername = document.getElementById("username").value;
  //   const { PythonShell } = require("python-shell");
  //   var shell = new PythonShell("backend.py", {
  //     mode: "text",
  //     args: [searchUsername],
  //   });
  //   shell.on("message", function (message) {
  //     console.log(message);
  //     message = message.substr(1, message.length - 2);
  //     user_data = message.split(",");

  //     document.getElementById("loaderimage").classList.add("hide");
  //     document.getElementById("userdetailplane").classList.remove("hide");

  //     document.getElementById("usernamedesc").innerHTML = user_data[0];
  //     if (user_data[1]) {
  //       document.getElementById("userbio").innerHTML = user_data[1];
  //     }
  //     document.getElementById("userfollowers").innerHTML = user_data[2];
  //     document.getElementById("userfollowedby").innerHTML = user_data[3];
  //     document.getElementById("pimage").src = user_data[4];
  //   });

  var request = require("request");

  request(
    {
      uri: "https://www.instagram.com/" + searchUsername + "/?__a=1",
      method: "GET",
      timeout: 10000,
      followRedirect: false,
    },
    function (error, response, body) {
      var raw_data = JSON.parse(body);
      var user_details = raw_data.graphql.user;
      var bio = user_details.biography;
      var followers = user_details.edge_followed_by.count;
      var following = user_details.edge_follow.count;
      var profileHD = user_details.profile_pic_url_hd;
      var fullname = user_details.full_name;


      document.getElementById("loaderimage").classList.add("hide");
      document.getElementById("userdetailplane").classList.remove("hide");
      document.getElementById("usernamedesc").innerHTML = fullname;
      if (bio) {
        document.getElementById("userbio").innerHTML = bio;
      }
      document.getElementById("userfollowers").innerHTML = followers;
      document.getElementById("userfollowedby").innerHTML = following;
      document.getElementById("pimage").src = profileHD;
    }
  );
}
