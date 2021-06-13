$("#hamburger").click(() => {
	const navMain = document.querySelector(".nav--main");
	const hamburger = document.getElementById("hamburger");
	navMain.classList.toggle("hidden");
	navMain.classList.toggle("opacity-100");
	hamburger.classList.toggle("is-active");
});

$("#scroll-top").click(() => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
});

$("#toggle-dark-mode").click(() => {
	if ($("#toggle-dark-mode:checked").val()) {
		$("#dark-mode").html(`
			<style>
				:root {
					--logo: url("../images/logo-dark.png");
					--text-primary: #ffffff;
					--text-secondary: #a55eea;
					--bg-primary: #411465;
					--bg-secondary: #2c064a;
					--bg: rgba(55, 7, 93, 0.9);
					--btn-primary: #ffffff00;
					--btn-primary-hover: #a55eea;
					--btn-secondary: #ed2b91;
					--btn-secondary-hover: #de318c;
				}
			</style>
			<div id="particles-js"></div>
			<script>
				particlesJS("particles-js", {
					particles: {
						number: {value: 160, density: {enable: true, value_area: 800}},
						color: {value: "#ffffff"},
						shape: {
							type: "circle",
							stroke: {width: 0, color: "#000000"},
							polygon: {nb_sides: 5},
							image: {src: "img/github.svg", width: 100, height: 100},
						},
						opacity: {value: 1, random: true, anim: {enable: true, speed: 1, opacity_min: 0, sync: false}},
						size: {value: 3, random: true, anim: {enable: false, speed: 4, size_min: 0.3, sync: false}},
						line_linked: {enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1},
					},
					retina_detect: true,
				});
			</script>
			`);

		$(".nav-item").toggleClass("dark-mode");
		$("#particles-js").removeClass("hidden");
	} else {
		$("#dark-mode").html("");
		$("#particles-js").addClass("hidden");
	}
});

///slide show

var islogin = window.localStorage.getItem("islogin");
if (islogin) {
	$("#islogin").html(`
	<button id="avatar" class="relative">
	<img
		class="w-8 h-8 rounded-full object-cover object-top border border-purple-700"
		src="https://i.pinimg.com/564x/04/b1/5e/04b15e2d481829682f8a4fd4316500d5.jpg"
		alt=""
	/>
	<div class="menu absolute w-20 bg-white p-2 shadow-lg top-8 -left-6 rounded-md">
		<p onclick="logout()" class="text-black font-bold">Đăng xuất</p>
	</div>
</button>
	`);
}

function logout() {
	window.localStorage.removeItem("islogin");
	location.reload();
}
