'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
/**
 * Le compteur à palettes — l'affichage des gares et des aéroports, celui qui
 * fait claquer les caractères jusqu'à se poser. Né sur marsclub.fr le
 * 01/09/2026 (« ça sera plus rigolo », Roch), entré ici le 03/09/2026 pour
 * servir aussi aux outils internes : l'iPad mural d'Hora doit faire rouler
 * le chiffre de la semaine avec le même geste que la page des outils du site.
 *
 * Trois choix qui comptent :
 *
 * 1. Le rendu du serveur porte DÉJÀ la valeur finale. Sans JavaScript, ou dans
 *    un lecteur d'écran, on lit « 1 800 » — pas une rangée de zéros. Le roulage
 *    n'est qu'un habillage ajouté après l'hydratation.
 * 2. Un chiffre ne fait défiler que des chiffres, une lettre que des lettres.
 *    Les vraies palettes brassent tout, mais le mélange fait lire n'importe
 *    quoi une demi-seconde — ici la valeur reste toujours plausible.
 * 3. `prefers-reduced-motion` coupe l'animation net. Une rangée qui clignote
 *    n'est pas un détail de confort pour tout le monde.
 *
 * ⚠️ L'animation du claquement (`.solari-palette`) vit dans `theme.css`, que
 * chaque outil importe déjà : sans elle les palettes changent sans claquer.
 */
const CHIFFRES = '0123456789';
const LETTRES = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
/** L'alphabet que fait défiler une palette. Un symbole ne roule pas. */
export function alphabetDePalette(caractere) {
    if (CHIFFRES.includes(caractere))
        return CHIFFRES;
    if (LETTRES.includes(caractere.toUpperCase()))
        return LETTRES;
    return caractere;
}
const PAS = 45; // ms entre deux claquements
const TOURS = 8; // claquements que fait TOUTE palette, même celle déjà juste
const DECALAGE = 3; // claquements de plus par palette : la cascade de gauche à droite
/** Reste positif là où `%` de JavaScript ne l'est pas. */
export function modulo(n, m) {
    return ((n % m) + m) % m;
}
/**
 * Le caractère qu'affiche une palette à `restants` crans de sa cible — la
 * fonction pure derrière l'animation, pour qu'un test la fixe sans DOM.
 */
export function paletteEnRoute(cible, restants) {
    const alphabet = alphabetDePalette(cible);
    if (alphabet === cible)
        return cible; // symbole ou espace : rien à faire
    return alphabet[modulo(alphabet.indexOf(cible) - restants, alphabet.length)] ?? cible;
}
export function CompteurSolari({ valeur, unite, intitule, compact = false, className = '', }) {
    const cibles = [...valeur];
    const [affiche, setAffiche] = useState(cibles);
    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches)
            return;
        // Chaque palette recule d'autant de crans qu'elle en fera, puis les remonte
        // un par un. Toutes roulent le même nombre de fois — sans ça, un « 0 » déjà
        // en place resterait immobile pendant que ses voisines tournent, et le
        // tableau aurait l'air à moitié cassé. Le décalage les fait se poser de
        // gauche à droite, comme une vraie rangée qu'on rafraîchit.
        const restants = cibles.map((c, i) => (alphabetDePalette(c) === c ? 0 : TOURS + i * DECALAGE));
        const dessine = () => setAffiche(cibles.map((c, i) => paletteEnRoute(c, restants[i] ?? 0)));
        dessine();
        const minuteur = setInterval(() => {
            let encore = false;
            for (let i = 0; i < restants.length; i += 1) {
                if ((restants[i] ?? 0) > 0) {
                    restants[i] = (restants[i] ?? 0) - 1;
                    encore = true;
                }
            }
            dessine();
            if (!encore)
                clearInterval(minuteur);
        }, PAS);
        return () => clearInterval(minuteur);
        // La valeur ne change pas en cours de vie : une seule mise en route.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [valeur]);
    return (_jsxs("div", { className: `${compact ? 'rounded-xl p-2' : 'rounded-2xl p-4'} border-2 border-charbon bg-charbon text-creme ${className}`, children: [intitule && _jsx("p", { className: "mb-2 text-xs uppercase tracking-widest opacity-70", children: intitule }), _jsxs("p", { className: compact ? 'flex flex-col gap-y-1' : 'flex flex-wrap items-baseline gap-x-2 gap-y-1', "aria-hidden": "true", children: [_jsx("span", { className: `flex gap-[0.15em] font-display tabular-nums ${compact ? 'text-2xl' : 'text-3xl md:text-4xl'}`, children: affiche.map((c, i) => c === ' ' ? (_jsx("span", { className: "w-[0.35em]" }, i)) : (_jsxs("span", { 
                            // Le fond d'une palette est un charbon plus sombre que le
                            // panneau : c'est la seule teinte hors palette du paquet, et
                            // elle ne sert qu'à creuser les cases — jamais du texte.
                            className: "relative inline-flex h-[1.25em] w-[0.72em] items-center justify-center overflow-hidden rounded-[0.1em] bg-[#22201f]", children: [_jsx("span", { className: "solari-palette leading-none", children: c }, c), _jsx("span", { className: "pointer-events-none absolute inset-x-0 top-1/2 h-px bg-creme/20" })] }, i))) }), _jsx("span", { className: `${compact ? 'text-xs leading-snug' : 'text-sm'} opacity-80`, children: unite })] }), _jsx("p", { className: "sr-only", children: `${valeur} ${unite}` })] }));
}
