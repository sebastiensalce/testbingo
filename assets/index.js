window.onload = function() {
    load_anchor();

    let audio = document.getElementsByTagName("audio")[0];
    let all_checkboxes = document.getElementsByTagName("input");
    for (let i = 0; i < all_checkboxes.length; i++) {
        all_checkboxes[i].addEventListener('change', function() {
            if (this.checked) {
                this.parentNode.classList.add("checked");
                audio.play();
            }
            else {
                this.parentNode.classList.remove("checked");
            }
            history.replaceState(undefined, undefined, gen_anchor());
            document.getElementById("sharelink").value = window.location;
            refreshScores();
        });
    }

    document.getElementById("hide-desc").addEventListener('click', toggleDesc);
}

function toggleDesc() {
    let all_checkboxes = document.getElementsByTagName("label");
    for (let i = 0; i < all_checkboxes.length; i++) {
        if (this.innerHTML == "Masquer les descriptions") {
            all_checkboxes[i].children[1].classList.add("hidden");
        }
        else {
            all_checkboxes[i].children[1].classList.remove("hidden");
        }
    }
    if (this.innerHTML == "Masquer les descriptions") {
        this.innerHTML = "Afficher les descriptions";
    }
    else {
        this.innerHTML = "Masquer les descriptions";
    }
}

function refreshScores() {
    let all_chk = document.getElementsByTagName("input");
    let score_elem = document.getElementById("score");

    let score = 0;
    let is_x = 1;
    let scores_y = [1, 1, 1, 1, 1];

    for (let i = 0; i < all_chk.length; i++) {
        if (i % 5 == 0) {
            is_x = 1;
        }

        if (all_chk[i].checked) {
            score += 1;
        }
        else {
            is_x = 0;
            scores_y[i % 5] = 0;
        }

        if (i % 5 == 4 && is_x == 1) {
            score += 5;
        }
    }
    for (let i = 0; i < scores_y.length; i++) {
        if (scores_y[i]) {
            score += 5;
        }
    }
    score_elem.innerHTML = score + " point" + (score > 1 ? "s" : "");
    refreshDesc(score);
}

function refreshDesc(score) {
    let score_title = document.getElementById("score-title");
    let score_desc = document.getElementById("score-desc");
    if (score < 4) {
        score_title.innerHTML = "Niveau insuffisant&nbsp;!";
        score_desc.innerHTML = "Votre discours n'est pas assez distru.. drisru... disruptif&nbsp;! Vous n'avez probablement pas l'esprit startup. Laissez-vous guider par la main invisible du marché dans le web 4.0&nbsp;! Disruptez vos concurrents et percez le secret de la Blockchain&nbsp;! Bienvenue dans la jungle digitale.";
    }
    else if (score < 8) {
        score_title.innerHTML = "Niveau Starteuppeur Débutant";
        score_desc.innerHTML = "Les affaires commencent pour Kévin, jeune auto-digital-entrepreneur de 25 ans, qui recherche la gloire, le succès mais surtout le profit. Son projet ? Inventer l'épingle à linge connectée, qui surveille en temps réel l'humidité des vêtements pendant leur séchage, puis qui vous les rapporte par drone&nbsp;! Il compte revendre sa startup à Google et partir vivre dans les Caraïbes.";
    }
    else if (score < 12) {
        score_title.innerHTML = "Niveau Digital Market Entrepreneuse";
        score_desc.innerHTML = "La concurrence est rude pour Julie, fondatrice, CTO et CEO de la startup Forky, une boîte Agile qui produit des smart fourchettes connectées. En effet, depuis que Apple a sorti sa iFork, elle ne génère plus aucun chiffre d'affaires et ne peut plus créer de l'emploi. Heureusement, grâce au pouvoir de la French Tech, Julie triomphera un jour&nbsp;!"; 

    }
    else if (score < 16) {
        score_title.innerHTML = "Niveau CEO et Fondateur de la startup Carotte 4.0";
        score_desc.innerHTML = "Lorsque Emmanuel-Pierre a prononcé les mots « Deep Learning », les business angels ont compris : Emmanuel-Pierre est dans le futur et sa startup <a href=\"https://www.youtube.com/watch?v=_VB_b4dSmzE\">Carotte 4.0</a> va changer le monde. Grâce au Big Data, ses IA deviennent <i>smart</i> et disruptent le cloud, pour révolutionner le Web 4.0 et même le Dark Web.";
    }
    else if (score < 25) {
        score_title.innerHTML = "Innovatrice Quantique du Webmarketing Digital";
        score_desc.innerHTML = "L'incubateur de startups de Sophie a atteint la suprématie quantique et s'apprête à révolutionner le monde entier à l'aide d'une application mobile. En effet, par le pouvoir du cryptage de niveau militaire, la data est absolument impossible à pirater, même par les hackeurs du Dark Web. C'est l'heure de disrupter la planète&nbsp;!";
    }
    else if (score < 40) {
        score_title.innerHTML = "Grand Maître Disrupteur de la Blockchain";
        score_desc.innerHTML = "En fusionnant l'IA et la Blockchain, Thomas a percé le secret digital que seuls les Maîtres Blockchain et Satoshi Nakamoto connaissent : il a atteint l'Unique Vérité de la Big Data. Il se lance alors dans la gamification du webmarketing en SaaS, afin de développer des drones biométriques tueurs en JavaScript.";
    }
    else if (score < 50) {
        score_title.innerHTML = "Niveau Président Webmarketeur d'incubation smart";
        score_desc.innerHTML = "À seulement 39 ans, Emmanuel a congolexicomatisé les lois du marché après le succès de sa startup de marketing digital. À deux reprises, il a disrupté le monde des applications mobiles grâce à une R&amp;D d'incubation <i>smart</i>. Grand stratège networkeur et passionné de drones, il lutte contre les hackers digitaux autoradicalisés du Dark Web grâce à sa biométrie blockchainisée en IaaS du futur.";
    }
    else if (score < 60) {
        score_title.innerHTML = "Niveau Venture Capitalist des Business Angels";
        score_desc.innerHTML = "Après être revenu du futur (deux fois), Jeff a créé des drones quantiques afin d'accéder au Paradis. Là-bas, il a rencontré les Business Angels, qui lui ont promis d'incuber son projet en échange des analytics biométriques de sa Big Data. Grâce à son networking et à de nombreux meetups, Jeff est maintenant un Expert Webmarketing à bord de sa licorne. Félicitations, Jeff.";
    }
    else if (score < 84) {
        score_title.innerHTML = "Niveau Multinationale du Digital";
        score_desc.innerHTML = "Bill est CEO de sa startup disruptrice du Web 2.0. Aujourd'hui, il lance un cloud SaaS financé par le Big Data, connecté à tout l'IoT grâce au webmarketing du futur et son armée d'experts CTO Agiles. Son but ? Régner sur le Dark Web grâce à son IA quantique digitalisée et ses chatbots <i>smart</i>&nbsp;! Un projet ambitieux et disruptif, mais loin d'être impossible pour Bill.";
    }
    else {
        score_title.innerHTML = "Niveau Disruption Absolue";
        score_desc.innerHTML = "Ça y est, nous y sommes. Le summum de la disruption digitale, le pompon sur le gâteau, la cerise sur le pompon. Née dans un incubateur, Eve est une IA disruptive écrite en JS, experte CEO, qui a participé à de nombreux Hackathons au travers du Deep Learning. Très <i>smart</i>, elle a fondé sa startup SaaS pour connecter le Cloud et le Big Data dans la Blockchain, afin de révolutionner le web 8.0. Elle a envoyé des drones biométriques qui font des analytics cryptées sur les hackers du Dark Web et pris le contrôle de l'IoT ainsi que des applications mobiles. Surnommée « La Reine de la Tech », elle maîtrise le webmarketing digital du bout des doigts et a réussi à gamifier Scrum, ce que même Chuck Norris n'a pas réussi à faire. Basée sur l'open-source, elle est très connectée à son networking quantique du futur et possède tous les atouts pour régner sur le monde.";
    }
}

function load_anchor() {
    let all_checkboxes = document.getElementsByTagName("input");
    let hash = location.hash.replace("#", "").split('-');
    for (let i = 0; i < hash.length; i++) {
        let hashindex = parseInt(hash[i]);
        if (!isNaN(hashindex) && hashindex >= 0 && hashindex < 30) {
            all_checkboxes[hashindex].checked = true;
            all_checkboxes[hashindex].parentNode.classList.add("checked");
        }
    }
    document.getElementById("sharelink").value = window.location;
    refreshScores();
}

function gen_anchor() {
    let all_checkboxes = document.getElementsByTagName("input");
    let hash = "#";
    for (let i = 0; i < all_checkboxes.length; i++) {
        if (all_checkboxes[i].checked) {
            hash += i+"-";
        }
    }
    return hash;
}
