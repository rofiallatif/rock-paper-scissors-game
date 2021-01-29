// DOM & JAVASCRIPT - GAME SUIT JAWA.

// ALGORITMA :
	// Pertama, kita akan menangkap gambar pilihan player, dan kita akan kasih event pada gambar tsb, yaitu ketika gambar diklik, maka apa yg akan kita lakukan/terjadi.
	// Kedua, kita akan siapkan komputernya pilih apa.
	// Ketiga, kita siapkan juga aturan dari suit jepangnya. siapa yg menang antara apa lawan apa gitu.


// PERTAMA, MEMBUAT FUNCTION UNTUK MENANGKAP PILIHAN KOMPUTER.
	function getPilihanComputer() {
		const comp = Math.random();
	    if( comp < 0.34 ) return 'batu';
		if( comp >= 0.34 && comp < 0.67 ) return 'gunting';
	    return 'kertas';
	}

// KEDUA, MEMBUAT FUNCTION UNTUK RULESNYA ATAU ATURAN MAINNYA UNTUK MENDAPATKAN SIAPA PEMENANG DARI GAME SUIT JAWA.
	function getHasil(comp, player) {
	    if( player == comp ) return 'DRAW';
	    if( player == 'batu' ) return ( comp == 'gunting' ) ? 'PLAYER 1<br>WIN' : 'COM<br>WIN';
	    if( player == 'gunting' ) return ( comp == 'batu' ) ? 'COM<br>WIN' : 'PLAYER 1<br>WIN';
	    if( player == 'kertas' ) return ( comp == 'gunting' ) ? 'COM<br>WIN' : 'PLAYER 1<br>WIN';
	}


// KETIGA, KITA BUAT EVENTNYA.
	// EVENTnya adalah : Kita akan jalankan event kita ketika kita klik salah satu tombol batu, gunting, atau kertas.

	// 1. Misal : Kita pilih BATU.
		// Pertama, kita ambil element yg tombol yg IDnya batu1.
		const pBatu = document.querySelector('#batu1');

		// Lalu kita kasih event click dengan function expression tanpa nama.
		pBatu.addEventListener('click', function() {
			const pilihanComputer = getPilihanComputer();
			const pilihanPlayer = pBatu.className;
			const hasil = getHasil(pilihanComputer, pilihanPlayer);

			console.log('player : ' + pilihanPlayer);
			console.log('comp : ' + pilihanComputer);
			console.log('hasil : ' + hasil);

			// Kita kasih tanda pilihan kita.
			const kotakBatuPlayer = document.getElementById('kotak-batu-player');
			kotakBatuPlayer.onclick = kotakBatuPlayer.setAttribute('class', 'kotak-batu-player');
			const kotakGuntingPlayer = document.getElementById('kotak-gunting-player');
			kotakGuntingPlayer.removeAttribute('class');
			const kotakKertasPlayer = document.getElementById('kotak-kertas-player');
			kotakKertasPlayer.removeAttribute('class');


			// // Kita kasih tanda background putih pada pilihan comp, dan hapus background putih pada yg tidak dipilih oleh comp.
			if( pilihanComputer == 'batu' ) {
				const kotakBatuComp = document.getElementById('kotak-batu-comp');
				kotakBatuComp.setAttribute('class', 'kotak-batu-comp');

				const kotakGuntingComp = document.getElementById('kotak-gunting-comp');
				kotakGuntingComp.removeAttribute('class');

				const kotakKertasComp = document.getElementById('kotak-kertas-comp');
				kotakKertasComp.removeAttribute('class');


			} else if( pilihanComputer == 'gunting' ) {
				const kotakGuntingComp = document.getElementById('kotak-gunting-comp');
				kotakGuntingComp.setAttribute('class', 'kotak-gunting-comp');

				const kotakBatuComp = document.getElementById('kotak-batu-comp');
				kotakBatuComp.removeAttribute('class');

				const kotakKertasComp = document.getElementById('kotak-kertas-comp');
				kotakKertasComp.removeAttribute('class');

			} else if( pilihanComputer == 'kertas' ) {
				const kotakKertasComp = document.getElementById('kotak-kertas-comp');
				kotakKertasComp.setAttribute('class', 'kotak-kertas-comp');

				const kotakBatuComp = document.getElementById('kotak-batu-comp');
				kotakBatuComp.removeAttribute('class');

				const kotakGuntingComp = document.getElementById('kotak-gunting-comp');
				kotakGuntingComp.removeAttribute('class');
			}
			

			// Kita buat hasilnya di class info yg di tengah.
			const kotakHasil = document.getElementById('kotak-hasil');
			kotakHasil.setAttribute('class', 'kotak-hasil');

			const infoHasil = document.querySelector('h3');
			infoHasil.innerHTML = hasil;
			infoHasil.setAttribute('class', 'info-hasil');
		});



	// 2. Misal : Kita pilih KERTAS.
		// Pertama, kita ambil element yg tombol yg IDnya kertas1.
		const pKertas = document.querySelector('#kertas1');

		// Lalu kita kasih event click dengan function expression tanpa nama.
		pKertas.addEventListener('click', function() {
			const pilihanComputer = getPilihanComputer();
			const pilihanPlayer = pKertas.className;
			const hasil = getHasil(pilihanComputer, pilihanPlayer);

			console.log('player : ' + pilihanPlayer);
			console.log('comp : ' + pilihanComputer);
			console.log('hasil : ' + hasil);

			// Kita kasih tanda pilihan kita.
			const kotakKertasPlayer = document.getElementById('kotak-kertas-player');
			kotakKertasPlayer.onclick = kotakKertasPlayer.setAttribute('class', 'kotak-kertas-player');

			const kotakGuntingPlayer = document.getElementById('kotak-gunting-player');
			kotakGuntingPlayer.removeAttribute('class');

			const kotakBatuPlayer = document.getElementById('kotak-batu-player');
			kotakBatuPlayer.removeAttribute('class');


			// // Kita kasih tanda background putih pada pilihan comp, dan hapus background putih pada yg tidak dipilih oleh comp.
			if( pilihanComputer == 'batu' ) {
				const kotakBatuComp = document.getElementById('kotak-batu-comp');
				kotakBatuComp.setAttribute('class', 'kotak-batu-comp');

				const kotakGuntingComp = document.getElementById('kotak-gunting-comp');
				kotakGuntingComp.removeAttribute('class');

				const kotakKertasComp = document.getElementById('kotak-kertas-comp');
				kotakKertasComp.removeAttribute('class');


			} else if( pilihanComputer == 'gunting' ) {
				const kotakGuntingComp = document.getElementById('kotak-gunting-comp');
				kotakGuntingComp.setAttribute('class', 'kotak-gunting-comp');

				const kotakBatuComp = document.getElementById('kotak-batu-comp');
				kotakBatuComp.removeAttribute('class');

				const kotakKertasComp = document.getElementById('kotak-kertas-comp');
				kotakKertasComp.removeAttribute('class');

			} else if( pilihanComputer == 'kertas' ) {
				const kotakKertasComp = document.getElementById('kotak-kertas-comp');
				kotakKertasComp.setAttribute('class', 'kotak-kertas-comp');

				const kotakBatuComp = document.getElementById('kotak-batu-comp');
				kotakBatuComp.removeAttribute('class');

				const kotakGuntingComp = document.getElementById('kotak-gunting-comp');
				kotakGuntingComp.removeAttribute('class');
			}
			

			// Kita buat hasilnya di class info yg di tengah.
			const kotakHasil = document.getElementById('kotak-hasil');
			kotakHasil.setAttribute('class', 'kotak-hasil');

			const infoHasil = document.querySelector('h3');
			infoHasil.innerHTML = hasil;
			infoHasil.setAttribute('class', 'info-hasil');
		});

	// 3. Misal : Kita pilih GUNTING.
		// Pertama, kita ambil element yg tombol yg IDnya kertas1.
		const pGunting = document.querySelector('#gunting1');

		// Lalu kita kasih event click dengan function expression tanpa nama pada gambar gunting.
		pGunting.addEventListener('click', function() {
			const pilihanComputer = getPilihanComputer();
			const pilihanPlayer = pGunting.className;
			const hasil = getHasil(pilihanComputer, pilihanPlayer);

			console.log('player : ' + pilihanPlayer);
			console.log('comp : ' + pilihanComputer);
			console.log('hasil : ' + hasil);

			// Kita kasih tanda pilihan kita.
			const kotakGuntingPlayer = document.getElementById('kotak-gunting-player');
			kotakGuntingPlayer.onclick = kotakGuntingPlayer.setAttribute('class', 'kotak-gunting-player');

			const kotakKertasPlayer = document.getElementById('kotak-kertas-player');
			kotakKertasPlayer.removeAttribute('class');

			const kotakBatuPlayer = document.getElementById('kotak-batu-player');
			kotakBatuPlayer.removeAttribute('class');


			// // Kita kasih tanda background putih pada pilihan comp, dan hapus background putih pada yg tidak dipilih oleh comp.
			if( pilihanComputer == 'batu' ) {
				const kotakBatuComp = document.getElementById('kotak-batu-comp');
				kotakBatuComp.setAttribute('class', 'kotak-batu-comp');

				const kotakGuntingComp = document.getElementById('kotak-gunting-comp');
				kotakGuntingComp.removeAttribute('class');

				const kotakKertasComp = document.getElementById('kotak-kertas-comp');
				kotakKertasComp.removeAttribute('class');


			} else if( pilihanComputer == 'gunting' ) {
				const kotakGuntingComp = document.getElementById('kotak-gunting-comp');
				kotakGuntingComp.setAttribute('class', 'kotak-gunting-comp');

				const kotakBatuComp = document.getElementById('kotak-batu-comp');
				kotakBatuComp.removeAttribute('class');

				const kotakKertasComp = document.getElementById('kotak-kertas-comp');
				kotakKertasComp.removeAttribute('class');

			} else if( pilihanComputer == 'kertas' ) {
				const kotakKertasComp = document.getElementById('kotak-kertas-comp');
				kotakKertasComp.setAttribute('class', 'kotak-kertas-comp');

				const kotakBatuComp = document.getElementById('kotak-batu-comp');
				kotakBatuComp.removeAttribute('class');

				const kotakGuntingComp = document.getElementById('kotak-gunting-comp');
				kotakGuntingComp.removeAttribute('class');
			}
			

			// Kita buat hasilnya di class info yg di tengah.
			const kotakHasil = document.getElementById('kotak-hasil');
			kotakHasil.setAttribute('class', 'kotak-hasil');

			const infoHasil = document.querySelector('h3');
			infoHasil.innerHTML = hasil;
			infoHasil.setAttribute('class', 'info-hasil');
		});

	// 4. Event ketika Kita tekan tombol REFRESH.
		const refresh = document.querySelector('.refresh');

		refresh.addEventListener('click', function() {
			const kotakBatuPlayer = document.getElementById('kotak-batu-player');
			kotakBatuPlayer.removeAttribute('class');

			const kotakGuntingPlayer = document.getElementById('kotak-gunting-player');
			kotakGuntingPlayer.removeAttribute('class');

			const kotakKertasPlayer = document.getElementById('kotak-kertas-player');
			kotakKertasPlayer.removeAttribute('class');

			const kotakBatuComp = document.getElementById('kotak-batu-comp');
			kotakBatuComp.removeAttribute('class');

			const kotakGuntingComp = document.getElementById('kotak-gunting-comp');
			kotakGuntingComp.removeAttribute('class');

			const kotakKertasComp = document.getElementById('kotak-kertas-comp');
			kotakKertasComp.removeAttribute('class');

			const kotakHasil = document.getElementById('kotak-hasil');
			kotakHasil.removeAttribute('class');

			const infoHasil = document.querySelector('h3');
			infoHasil.removeAttribute('class');
		});

	// 4. Event ketika Kita tekan tombol BACK (<).