var fotoPath;
var menuVisible = false;
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
	{ id: 1, img: '', fio: 'Иванов Иван Иванович', txt: '111 '},
	{ id: 2, img: './images/77.jpg', fio: 'Петров Петр Петрович', txt: '222 ' + txt } 
];

function changeText(e,id) {
	if (e.target.className === "btn btn-read") {
		e.target.className = "btn btn-hide";
		document.getElementById(id).setAttribute("class", "");
		document.getElementById(id).style.minHeight = "50px";
	} else {
		e.target.className = "btn btn-read";
		document.getElementById(id).setAttribute("class", "post-text");
	}
}

function readURL(input) {
	return (window.URL ? URL : webkitURL).createObjectURL(input.files[0]);
}

function attachmentFoto(){
	var name = document.getElementById("file");
	fotoPath = name.value;
	// document.getElementById("span-plus").style.display = "none";
	document.getElementById("span-plus").style.left = "72%";
	document.getElementById("btn-photo").style.pointerEvents = "none";
	document.getElementById("btn-photo").style.opacity = ".3";
	document.getElementById("foto-txt").innerHTML = 'Будет отправлена фотография';
	document.getElementById("div-txt").innerHTML = name.files.item(0).name + " (" + Math.round(name.files.item(0).size / 1024) + "КБ) " || "N/A";
	var result = document.getElementById("result");
	
	console.log("result", result);	
	$("#resizer-demo")[0].src = "";
	$("#file")[0].value = "";
}

function canselFoto(){
	$("#resizer-demo")[0].src = "";
	$("#file")[0].value = "";

	croppieContainer();
	document.getElementById("result").src = '../images/avatar.png';

	document.getElementById("foto-txt").innerHTML = "Добавить фотографию";
	document.getElementById("div-txt").innerHTML = "Ограничения: Тип jpg и Размер не более 5 МБ"; 
	document.getElementById("span-plus").style.left = "66%";
}

function croppieContainer(){
	$("div.croppie-container").remove();
	$("div#result-wrap").remove();

	var d1 = document.createElement("div");
	d1.id = "image-body";
	document.getElementById("image-wrap").appendChild(d1);

	var m1 = document.createElement("img");
	m1.id = "resizer-demo";
	document.getElementById("image-body").appendChild(m1);

	var d2 = document.createElement("div");
	d2.id = "result-wrap";
	document.getElementById("image-wrap").appendChild(d2);

	var m2 = document.createElement("img");
	m2.id = "result";
	document.getElementById("result-wrap").appendChild(m2);
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

function getFoto() {
	var name1 = document.getElementById("file");
	if (Math.round(name1.files.item(0).size / 1024 / 1024) <= 5) {
		if (document.getElementById("span-plus").style.left !== "72%") {
			getMeta(readURL(name1));
		}else{	
			croppieContainer();
			getMeta(readURL(name1));
		}
	} else {
		$("#myModal").modal("show");
	}
};

function getMeta(varA, varB) {
	if (typeof varB !== 'undefined') {
		var name2 = document.getElementById("file");

		var vEl = document.getElementById("image-body"), //div
		resize = new Croppie(vEl, {
			enableExif: true,
			viewport: {
			width: 280,
			height: 280
			},
			boundary: {
			width: 300,
			height: 300
			},
			showZoomer: false,
			enableResize: true,
			enableOrientation: true,
			mouseWheelZoom: "ctrl"
		});
		resize.bind({url: readURL(name2)});

		document.querySelector('.resizer-rotate').addEventListener('click', function (ev) {
			resize.bind();
			resize.rotate(-90);
		});

		vEl.addEventListener('update', function (ev) {
			// console.log('!!!!!!!');
			// resize.zoom = 0;
		});

		document.querySelector('.resizer-result').addEventListener('click', function (ev) {
			resize.bind();
			size = "viewport";
			resize.result({
				type: "blob",
				size: size,
			})
			.then(function(blob) {
				popupResult(blob);
			});
		});

		$("#modalEdit").modal("show");
		
		setTimeout(function () { document.querySelector(".resizer-result").click() }, 500);
		

		document.querySelector("#modalEdit").addEventListener("click", function (ev) {
			var target = $(ev.target);
			if (target[0].id === "modalEdit"){
				canselFoto();
			}
		});

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
// 		let st = reader.result.split("base64,"); // let st = reader.result
// 		var binary = fixBinary(atob(st[1]));
// 		var blob = new Blob([binary], { type: 'image/png' });
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



function popupResult(blob) {
//    imgToBase64ToBlob(document.getElementById("file"));
	if (blob){
		document.getElementById("result").src = URL.createObjectURL(blob);
	} 
}

// function bindNavigation() {
// 	var $html = $('html');
// 	$('nav a').on('click', function (ev) {
// 		var lnk = $(ev.currentTarget),
// 			href = lnk.attr('href'),
// 			targetTop = $('a[name=' + href.substring(1) + ']').offset().top;

// 		$html.animate({ scrollTop: targetTop });
// 		ev.preventDefault();
// 	});
// }

// bindNavigation();

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

function viewPosts() {
	  
	$.ajax({
		url: 'https://itunes.apple.com/search?term=hulk&entity=movie',
		type: 'GET',
		crossDomain: true,
		dataType: 'jsonp',
		success: function (result) { addPosts(result); },
		error: function () { alert('Ошибка при загрузке!'); },
	});

}

function addPosts (result) {
	for (var i = 0; i < posts.length; i++) {
		const element = posts[i];
		addPost(element);
	}
}

function fullFoto(e){
	swal({
		icon: e.target.src, 
		allowOutsideClick: true
	});

	setTimeout(function () {
		$(".sweet-alert").css("margin", function () {
			var top = -1 * ($(this).height() ),
				left = -1 * ($(this).width() );

			return top + "px 0 0 " + left + "px";
		});
	}, 1);
}

function addPost(element){
	var m = document.createElement('div');
	m.className = 'post';
	m.innerHTML = "\n\t\t<div class='photo'>\n\t\t\t<img onclick=\"fullFoto(event)\" alt=\"\" src=" + (element.img || "") + " >\n        </div>\n\t\t<div class='post-body'>\n\t\t\t<div class=\"full-name\">\n\t\t\t\t<h2>" + (element.fio || "") + " </h2>\n\t\t\t</div>\n\t\t\t<div id = \"" + element.id + "\" class='post-text'>\n\t\t\t" + (element.txt || "") + " \n\t\t\t</div>\n\t\t\t<div class='post-btn'>\n\t\t\t\t<button class=\"btn btn-read\" onclick=\"changeText(event, " + element.id + ")\"></button>\n\t\t\t</div>\n        </div>\n        ";
	document.getElementById('posts').appendChild(m);
}

function validForm() {
	var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
	var num_regex = /^[0-9]/i;
	var typeError;

	var array = [0,2,3];
	var er = false;
	for (i = 0; i < array.length; i++) {
		var j = array[i];

		if (
			!document.forms[0][j].validity.valid || 
			!document.forms[0][j].value.trim().length ||
			(j === 3 && !email_regex.test(document.forms[0][j].value))
		) {
			er = true;
			document.forms[0][j].focus();
			
			document.forms[0][j].classList.add("is-invalid");

			typeError = document.getElementById("error");

			console.log("111", document.forms);
			
			if (j === 3 && !email_regex.test(document.forms[0][j].value) && document.forms[0][j].value.trim().length ){
				typeError.innerText = "Не корректный адрес";
			} else if (j === 3){
				typeError.innerText = "Укажите почту";
			}
			if (j === 2) {
               typeError.innerText = "Заполните поле Имя и Фамилия";
			}
			if (j === 0) {
				typeError.innerText = "Добавьте свою историю";
			}

			typeError.style.display = "block";
		} 
	}
	if (!er) {
		document.getElementById("error").style.display = "none";
		send();
	} 
}

function visibleMenu(){
	if (!menuVisible) {
		document.getElementById("menu-btn-list").style.display = "flex";
		menuVisible = true;
	} else {
		document.getElementById("menu-btn-list").style.display = "none";
		menuVisible = false;
	}
};


function cleanError(){
	var array = [0, 2, 3];
	if (document.getElementById("error")){
		document.getElementById("error").style.display = "none";
		for (i = 0; i < array.length; i++) {
			var j = array[i];
			document.forms[0][j].classList.remove("is-invalid");
		}
	}
}

(function () {
	var upDown = function(up, down, pixels) {
		var elem = document.getElementById('wibro'),
			bottom = elem.offsetTop;

		if ((pixels > 0 && bottom > up) || (pixels < 0 && bottom < down)) {
		clearInterval(timer);
		timer = setInterval(function() {
			startTimer(pixels * -1);
		}, delay);
		}
		elem.style.top = bottom + pixels + "px";
		i++;
    };

	var delay = 90
		i = 0,

	startTimer = function (pixels) {

		if(window.outerHeight === 1024){
			upDown(300, 280, pixels);
		} else if (window.outerHeight < 650) {
			upDown(230, 210, pixels);
		} else {
			upDown(450, 430, pixels);
		}
	};

	var timer = setInterval(function () {
		startTimer(20);
	}, delay);

})();


document.addEventListener('DOMContentLoaded', function () { // Аналог $(document).ready(function(){
	$("#name1").bind("keyup blur", function() {
		var node = $(this);
		node.val(node.val().replace(/[^a-zA-Zа-яА-Я\h\v\s]/g, ""));
	});
	viewPosts();
});

