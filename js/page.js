var fotoPath;
// document.getElementById("span-plus").addEventListener("click", getFoto);
var txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' +
'Alias nesciunt aliquam sint aliquid enim quisquam amet, minus ea sed neque perferendis corrupti'
+ 'rspiciatis, doloribus earum incidunt sunt rem vero ducimus fuga quaerat necessitatibus'
+ 'similique facere veritatis excepturi ? Earum odit autem ipsa quos.Architecto voluptatum quia'
+ 'doloremque autem aperiam, modi sed odit! Nobis et voluptate architecto, laudantium quisquam'
+ 'minima, impedit provident aut praesentium, eligendi quas labore dignissimos quaerat ?'
	+ 'Inventore nesciunt tenetur maiores vitae quaerat eveniet adipisci, architecto voluptatem'
+ 'magni necessitatibus voluptatibus molestiae ab a porro, enim ipsa perferendis iste ipsum'
+ 'aliquid officiis! Dignissimos, commodi id.Architecto, cupiditate accusamus! Quo neque hic'
+ 'nobis, harum, aut asperiores officia explicabo amet dignissimos nihil enim nisi pariatur'
+ 'ratione praesentium odio est nam minima aspernatur ? Ullam blanditiis necessitatibus itaque'
+ 'minima aspernatur autem inventore nisi eum aperiam saepe doloribus animi architecto debitis'
+ 'fugit delectus, incidunt voluptatem excepturi velit.Doloribus optio doloremque fugit.'
+ 'Provident possimus sint iusto sunt, animi odio ? Tenetur sequi quae tempora! Magni odio quos'
+ 'repellendus itaque doloribus eveniet odit deserunt perspiciatis.Illum perspiciatis saepe eius'
+ 'labore, veniam consequatur dolor, aliquam similique amet minus enim voluptas dolorum aliquid'
+ 'omnis, perferendis cumque ipsam praesentium qui ? Enim autem obcaecati numquam voluptates'
+ 'aspernatur laudantium quod cupiditate ab amet eum ducimus sapiente in praesentium, ut,'
	+ 'voluptatibus similique maxime exercitationem optio molestias architecto.Laudantium'
+ 'adipisci dolor obcaecati ipsa qui quae facere dolorum, molestias asperiores facilis neque'
+ 'eveniet.Repellendus aspernatur harum, blanditiis, voluptatibus enim fugiat, error consequatur'
+ 'eius esse impedit unde officiis non dignissimos tenetur nesciunt recusandae nihil debitis'
+ 'sed porro excepturi distinctio hic corrupti.Non quam facere omnis, ipsam totam nemo a!'
+ 'Reiciendis corrupti exercitationem placeat debitis rerum commodi, officiis maxime repellendus'
+ 'vero earum animi beatae voluptate non similique quo quia nemo ipsam error sint.Temporibus'
+ 'commodi velit fugit sed repellat, doloremque eius, earum quam nobis et eveniet minima vitae'
+ 'laudantium illo, inventore modi quia ipsam ipsum placeat eligendi! Voluptas quasi non vel'
+ 'necessitatibus ? Corporis in, sunt praesentium, explicabo mollitia ut quasi accusantium soluta'
+ 'excepturi natus possimus corrupti obcaecati rem dignissimos ea.Aliquam quidem atque possimus'
+ 'alias doloribus similique in non at quasi dolorem eius eaque, deserunt molestias repudiandae'
+ 'ad architecto magni! Eveniet cumque corporis deserunt excepturi vitae, eaque, harum ullam'
+ 'atque repellat consectetur, error vel distinctio.Dolorum obcaecati alias enim a mollitia'
+ 'eligendi itaque praesentium, ab reprehenderit dolor nihil provident qui cum dignissimos sed'
+ 'aperiam ? Voluptatem laborum eveniet eligendi ut soluta.Magnam aliquam maxime recusandae'
+ 'asperiores quas accusantium officia quisquam perferendis ut, quia sapiente dolorum'
+ 'necessitatibus odit nam fuga nesciunt atque! Aut placeat nisi sint eaque ad, eligendi'
+ 'corrupti temporibus saepe suscipit eveniet minus, soluta a facere nihil enim error nemo'
+ 'delectus ipsa quo perspiciatis dolores velit molestiae harum.Iusto temporibus porro incidunt'
+ 'nihil eum voluptate, vel harum reprehenderit aliquid quis eveniet exercitationem nemo ab'
+ 'consectetur aspernatur voluptatem, doloremque similique.Incidunt, repellendus voluptatibus'
+ 'cumque ab ea eius perferendis nemo dignissimos ? Rerum sunt sit, quam modi repudiandae vero'
+ 'minus sed quasi deserunt error tenetur voluptatibus corrupti, explicabo, temporibus voluptates'
+ 'delectus veniam quia odio laboriosam.Eius repellendus doloremque voluptatum! Nostrum, eligendi ipsum!';

var resize;

var posts = [
	{ id: 1, img: './images/88.jpg', fio: 'Иванов Иван Иванович', txt: '111 ' + txt},
	{ id: 2, img: './images/77.jpg', fio: 'Петров Петр Петрович', txt: '222 ' + txt } 
];

function changeText(e,id) {
	console.log(e);
	if (e.target.className === "btn btn-read") {
		e.target.className = "btn btn-hide";
    	document.getElementById(id).setAttribute("class", "");
	} else {
			e.target.className = "btn btn-read";
			document.getElementById(id).setAttribute("class", "post-text");
	}
}

function readURL(input) {
	return (window.URL ? URL : webkitURL).createObjectURL(input.files[0]);
}


function getFoto() {
	let name = document.getElementById("file");
	if (Math.round(name.files.item(0).size / 1024 / 1024) <= 5) {
		getMeta(readURL(name));
	} else {
		$("#myModal").modal("show");
	}
};

function attachmentFoto(){
	let name = document.getElementById("file");
	fotoPath = name.value;
	document.getElementById("span-plus").style.display = "none";
	document.getElementById("btn-photo").style.pointerEvents = "none";
	document.getElementById("btn-photo").style.opacity = ".3";
	document.getElementById("foto-txt").innerHTML = 'Будет отправлена фотография';
	document.getElementById("div-txt").innerHTML = name.files.item(0).name + " (" + Math.round(name.files.item(0).size / 1024) + "КБ) " || "N/A";
}

function canselFoto(){
	$("#resizer-demo")[0].src = "";
	$("#file")[0].value = "";
	$("div.croppie-container").remove();

	var m = document.createElement('div');
	m.id = "resizer-demo";
	document.getElementById("image-body").appendChild(m);

}
function output(node) {
	var existing = $("#result .resizer-result");
	if (existing.length > 0) {
		existing[0].parentNode.replaceChild(node, existing[0]);
	}
	else {
		$('#result')[0].appendChild(node);
	}
}

function fixBinary(bin) {
	var length = bin.length;
	var buf = new ArrayBuffer(length);
	var arr = new Uint8Array(buf);
	for (var i = 0; i < length; i++) {
		arr[i] = bin.charCodeAt(i);
	}
	return buf;
}

function getMeta(varA, varB) {
	if (typeof varB !== 'undefined') {
		let name = document.getElementById("file");

		var vEl = document.getElementById('resizer-demo'),
		resize = new Croppie(vEl, {
			enableExif: true,
			viewport: { width: varA - 40, height: varB - 40 },
			boundary: { width: varA, height: varB },
			showZoomer: false,
			enableResize: true,
			enableOrientation: true,
			mouseWheelZoom: 'ctrl'
		});
		resize.bind({url: readURL(name)});

		document.querySelector('.resizer-rotate').addEventListener('click', function (ev) {
			resize.rotate(parseInt("90degrees"));
		});

		vEl.addEventListener('update', function (ev) {
			resize.zoom = 0;
			// console.log('resize update', ev.detail.zoom);
		});

		document.querySelector('.resizer-result').addEventListener('click', function (ev) {
			size = "viewport";
			resize.result({
				type: "blob",
				size: size,
			})
			.then(function(blob) {
				popupResult({ 
					src: blob
				});
			});
		});

		$("#modalEdit").modal("show");
	} else {
		var img = new Image();
		img.src = varA;
		img.onload = function () {
			getMeta(this.width, this.height);
		}
	}
}

// function imgToBase64ToBlob(element) {
// 	var file = element.files[0];
// 	var reader = new FileReader();
// 	reader.onloadend = function () {
// 		let st = reader.result.split("base64,");
// 		var binary = fixBinary(atob(st[1]));
// 		var blob = new Blob([binary], { type: 'image/png' });
// 		console.log("blob", blob);
// 		swal({
// 			title: "",
// 			html: true,
// 			icon: URL.createObjectURL(blob), 
// 			allowOutsideClick: true
// 		});

// 		setTimeout(function () {
// 			$(".sweet-alert").css("margin", function () {
// 				var top = -1 * ($(this).height() / 2),
// 					left = -1 * ($(this).width() / 2);

// 				return top + "px 0 0 " + left + "px";
// 			});
// 		}, 1);
// 	}
// 	reader.readAsDataURL(file);
// }



function popupResult(result) {
//    imgToBase64ToBlob(document.getElementById("file"));
  console.log(result.src);
  var html;
  if (result.html) {
    html = result.html;
  }
  if (result.src) {
    html = '<img src="' + result.src + '" />';
  }

  swal({ 
	  title: "", 
	  html: true, 
	  // text: html,
	  icon: URL.createObjectURL(result.src), //'C:/Users/work/Desktop/Download/77.jpg', blob
	  allowOutsideClick: true }); 

  setTimeout(function() {
    $(".sweet-alert").css("margin", function() {
      var top = -1 * ($(this).height() / 2),
        left = -1 * ($(this).width() / 2);

      return top + "px 0 0 " + left + "px";
    });
  }, 1);
}

function bindNavigation() {
	var $html = $('html');
	$('nav a').on('click', function (ev) {
		var lnk = $(ev.currentTarget),
			href = lnk.attr('href'),
			targetTop = $('a[name=' + href.substring(1) + ']').offset().top;

		$html.animate({ scrollTop: targetTop });
		ev.preventDefault();
	});
}

bindNavigation();

function send() {
	document.getElementById("btn-photo").style.pointerEvents = "none";
	document.getElementById("btn-photo").style.opacity = ".3";
	document.getElementById("sub").style.pointerEvents = "none";
	document.getElementById("sub").style.opacity = ".3";
	thanks();
}

function thanks() {
	var thanks = document.getElementsByClassName("thanks");
	var form = document.getElementsByClassName("form");

	if (thanks[0]){thanks[0].setAttribute("class", "display-block2");}
	if (form[0]) {
    form[0].setAttribute("class", "display-none");
  }
}

function httpGetPromise (url) {
	return new Promise(function (resolve, reject) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);

		xhr.onload = function () {
			if (this.status == 200) {
				resolve(this.response);
			} else {
				var error = new Error(this.statusText);
				error.code = this.status;
				reject(error);
			}
		};
		xhr.onerror = function () {
			reject(new Error("Network Error"));
		};
		xhr.send();
	});
}

function viewPosts() {

	httpGetPromise("https://itunes.apple.com/search?term=hulk&entity=movie").then(
		res => {
			jsn = JSON.parse(res);
			console.log(jsn);
		},
		err=>{
			console.log(err);	
		}
  	);

	for (let i = 0; i < posts.length; i++) {
		const element = posts[i];
		addPost(element);
	}
}

function addPost(element){
	var m = document.createElement('div');
	m.className = 'post';
	m.innerHTML = "\n\t\t<div class='photo'>\n\t\t\t<img alt=\"\" src=" + (element.img || "") + ">\n        </div>\n\t\t<div class='post-body'>\n\t\t\t<div class=\"full-name\">\n\t\t\t\t<h2>" + (element.fio || "") + " </h2>\n\t\t\t</div>\n\t\t\t<div id = \"" + element.id + "\" class='post-text'>\n\t\t\t" + (element.txt || "") + " \n\t\t\t</div>\n\t\t\t<div class='post-btn'>\n\t\t\t\t<button class=\"btn btn-read\" onclick=\"changeText(event, " + element.id + ")\"></button>\n\t\t\t</div>\n        </div>\n        ";
	document.getElementById('posts').appendChild(m);
}

function validForm() {
	let array = [0,2,3];
	var er = false;

	for (let i = 0; i < array.length; i++) {
		const j = array[i];
		if (
			!document.forms[0][j].validity.valid || 
			!document.forms[0][j].value.trim().length
		) {
      er = true;
      document.forms[0][j].focus();
      document.getElementById("error").style.display = "block";
    } 
	}

	if (!er) {
		document.getElementById("error").style.display = "none";

		send();
	} 

}

function cleanError(){
	if (document.getElementById("error")){
		document.getElementById("error").style.display = "none";
	}
}

document.addEventListener('DOMContentLoaded', function () { // Аналог $(document).ready(function(){
	viewPosts();
});
