(() => {
    const menu = `
        <a class="site-home-link" href="index.html" aria-label="Torna alla home">🏠</a>
        <button class="site-menu-button" aria-label="Apri il menu" aria-expanded="false" aria-controls="site-menu-panel">
            <span></span><span></span><span></span>
        </button>
        <nav id="site-menu-panel" class="site-menu-panel" aria-label="Menu principale">
            <ul>
                <li><a href="letteratura.html">Letteratura</a><ul class="submenu"><li><a href="letteratura.html">I 10 libri che mi hanno formata</a></li></ul></li>
                <li><a href="musica.html">Musica</a><ul class="submenu"><li><a href="top-10-album.html">TOP 10 ALBUM DEL &lt;3</a></li><li><a href="questa-musica-sono-io.html">Questa musica sono io</a></li></ul></li>
                <li><a href="podcast.html">Podcast</a><ul class="submenu"><li><a href="podcast.html">Podcast ascoltati / in ascolto</a></li></ul></li>
                <li><a href="serie-tv.html">SERIE TV</a><ul class="submenu"><li><a href="top-10-serie-tv.html">TOP 10 SERIE TV</a></li><li><a href="archivio-cartoni-programmi-teen.html">Archivio cartoni / programmi teen</a></li><li><a href="archivio-serie-tv.html">Archivio serie tv</a></li></ul></li>
                <li><a href="cinema.html">Cinema</a></li>
                <li><a href="arte.html">Arte</a></li>
                <li><a href="chi-sono.html">CONTATTI🐸</a></li>
            </ul>
        </nav>`;

    document.body.insertAdjacentHTML('afterbegin', menu);

    if (window.location.pathname.endsWith('/podcast.html')) {
        document.title = 'Podcast ascoltati / in ascolto | Il mio sito';
        const heading = document.querySelector('h1');
        const subtitle = document.querySelector('.rating-note');
        if (heading) heading.textContent = 'PODCAST ASCOLTATI / IN ASCOLTO';
        if (subtitle) subtitle.textContent = 'In ordine alfabetico, con voti in 4/4';
    }

    const button = document.querySelector('.site-menu-button');
    const panel = document.querySelector('#site-menu-panel');

    const closeMenu = () => {
        button.classList.remove('is-open');
        panel.classList.remove('is-open');
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-label', 'Apri il menu');
    };

    button.addEventListener('click', () => {
        const isOpen = button.classList.toggle('is-open');
        panel.classList.toggle('is-open', isOpen);
        button.setAttribute('aria-expanded', String(isOpen));
        button.setAttribute('aria-label', isOpen ? 'Chiudi il menu' : 'Apri il menu');
    });

    panel.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
})();
