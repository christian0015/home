
    //---------------------------------------Button Menu----------------------------------
    // Récupération des éléments HTML
    const choose1 = document.getElementById('choose1');
    const card1 = document.getElementById('card1');

    // Fonction pour ouvrir le menu
    function opencard1() {
        card1.classList.add('open');
        document.addEventListener('click', closecard1);
    }

    // Fonction pour fermer le menu
    function closecard1(event) {
        if (!card1.contains(event.target) && event.target !== choose1) {
            card1.classList.remove('open');
            document.removeEventListener('click', closecard1);
        }
    }

    // Ajout d'un écouteur d'événement pour ouvrir le menu au clic
    choose1.addEventListener('click', opencard1);

    //***************************************************************************************

    // Récupération des éléments HTML
    const choose2 = document.getElementById('choose2');
    const card2 = document.getElementById('card2');

    // Fonction pour ouvrir le menu
    function opencard2() {
        card2.classList.add('open');
        document.addEventListener('click', closecard2);
    }

    // Fonction pour fermer le menu
    function closecard2(event) {
        if (!card2.contains(event.target) && event.target !== choose2) {
            card2.classList.remove('open');
            document.removeEventListener('click', closecard2);
        }
    }

    // Ajout d'un écouteur d'événement pour ouvrir le menu au clic
    choose2.addEventListener('click', opencard2);

    //*******************************************************************************************

    // Récupération des éléments HTML
    const choose3 = document.getElementById('choose3');
    const card3 = document.getElementById('card3');

    // Fonction pour ouvrir le menu
    function opencard3() {
        card3.classList.add('open');
        document.addEventListener('click', closecard3);
    }

    // Fonction pour fermer le menu
    function closecard3(event) {
        if (!card3.contains(event.target) && event.target !== choose3) {
            card3.classList.remove('open');
            document.removeEventListener('click', closecard3);
        }
    }

    // Ajout d'un écouteur d'événement pour ouvrir le menu au clic
    choose3.addEventListener('click', opencard3);

    //***********************************************************************************************

    // Récupération des éléments HTML
    const choose4 = document.getElementById('choose4');
    const card4 = document.getElementById('card4');

    // Fonction pour ouvrir le menu
    function opencard4() {
        card4.classList.add('open');
        document.addEventListener('click', closecard4);
    }

    // Fonction pour fermer le menu
    function closecard4(event) {
        if (!card4.contains(event.target) && event.target !== choose4) {
            card4.classList.remove('open');
            document.removeEventListener('click', closecard4);
        }
    }

    // Ajout d'un écouteur d'événement pour ouvrir le menu au clic
    choose4.addEventListener('click', opencard4);
