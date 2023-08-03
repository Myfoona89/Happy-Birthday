window.onload = function () {
	let images = document.querySelectorAll('.gallery .photos img');
	let slider = new Slider(images);
	let start = document.querySelector('.start');
	let stop = document.querySelector('.stop');

	start.addEventListener('click', () => {
  		document.querySelector('audio').play();
  		slider.run(2000);
  		start.classList.remove('showed');
  		stop.classList.add('showed');
	});

	stop.addEventListener('click', () => {
  		document.querySelector('audio').pause();
  		slider.stop();
  		stop.classList.remove('showed');
  		start.classList.add('showed');
	})

	function current(){
		this.images[this.i].classList.remove('showed');
		this.i++;

		if (this.i >= this.images.length) {
			this.i = 0;
		};

		this.images[this.i].classList.add('showed'); 
		
	}

	function Slider(images) {
		this.images = images;
		this.i = 0;
		this.interval = null;

		this.run = function(time){
			let c = current.bind(this)
			this.interval = setInterval(c, time);
		};

		this.stop = function(time){
			clearInterval(this.interval);
		};
	};

};