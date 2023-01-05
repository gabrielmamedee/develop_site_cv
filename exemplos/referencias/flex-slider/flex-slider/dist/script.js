const { openBlock, createElementBlock, Fragment, renderList, normalizeStyle, normalizeClass, createElementVNode, toDisplayString } = Vue;

var script = {
  data() {
    return {
      active: 0,
      artists: [
        {
          name: "Dom Dolla",
          description: `Dom Dolla is one of the latest Australian DJ/Producers to break globally following a succession of releases like “Take It”, “San Frandisco” & “Pump The Brakes”. Dom’s unique blend of house music has amassed over 300 million+ streams, Platinum-certified records, ARIA Award for Best Dance Release, back to back Beatport #1’s, US Billboard Dance top 10’s, triple j’s hottest 100, Shazam & Spotify Global top 100 charts.`,
          spotify: {
            profileUrl:
              "https://open.spotify.com/artist/205i7E8fNVfojowcQSfK9m?si=HidnJ9jEQ5aK-dKZEZWdLw",
            embedUrl:
              "https://open.spotify.com/embed/artist/205i7E8fNVfojowcQSfK9m?utm_source=generator"
          },
          backgroundUrl: "https://assets.codepen.io/152347/dom-dolla.jpg"
        },
        {
          name: "Crooked Colours",
          description: `Crooked Colours are a three-piece band formed in Perth, Western Australia, consisting of members Phil Slabber, Leon Debaughn and Liam Merrett-Park. Starting out as house party DJs before forming in 2013, the trio have amassed a large following, peaking at number 1 on the Australian Dance Album ARIA Charts for their album "Langata".`,
          spotify: {
            profileUrl:
              "https://open.spotify.com/artist/0aA1GTrIMutjIh4GlPPUVN?si=N6CkDtcYQx-O4Zehl6CPag",
            embedUrl:
              "https://open.spotify.com/embed/artist/0aA1GTrIMutjIh4GlPPUVN?utm_source=generator"
          },
          backgroundUrl: "https://assets.codepen.io/152347/crooked-colours.jpg"
        },
        {
          name: "Mallrat",
          description: `Grace Kathleen Elizabeth Shaw, known professionally as Mallrat, is a 23-year-old Australian musician, singer, and rapper from Brisbane.  Mallrat released her official debut single, “Suicide Blonde” in 2015 whilst in her last year of High School. Since then, she has gone on to release three EPs: Uninvited (2016), In the Sky (2018) and Driving Music (2019).`,
          spotify: {
            profileUrl:
              "https://open.spotify.com/artist/4OSArit7O2Jaj4mgf3YN7A?si=NBgyC_b_QNujIr2Ubd2fSw",
            embedUrl:
              "https://open.spotify.com/embed/artist/4OSArit7O2Jaj4mgf3YN7A?utm_source=generator"
          },
          backgroundUrl: "https://assets.codepen.io/152347/mallrat.jpg"
        },
        {
          name: "Allday",
          description: `Tom Gaynor, better known by his stage name “Allday”, is an Australian rapper from Adelaide, South Australia. Allday became active in 2011, when Gaynor began uploading his music for free online. Millennial rapper Allday got his break with a pair of radio hits in his home country of Australia in 2014. "Right Now" and "You Always Know the DJ" were included on his debut album, Startup Cult. Since his debut, Allday continues to establish himself as a household name with tracks like “Wonder Drug” and “Protection” which received ARIA Gold awards.`,
          spotify: {
            profileUrl:
              "https://open.spotify.com/artist/2Ltr0s15RyvsjqWzSmiSRs?si=uTbBZc32RhC75qp7tlOfzw",
            embedUrl:
              "https://open.spotify.com/embed/artist/2Ltr0s15RyvsjqWzSmiSRs?utm_source=generator"
          },
          backgroundUrl: "https://assets.codepen.io/152347/allday.jpg"
        },
        {
          name: "Boo Seeka",
          description: `Boo Seeka is the artist name of Australian electro-pop singer-songwriter, Ben Gumbleton. After bursting onto the scene in 2015 with his debut song, Kingdom Leader - he has continued to establish himself as a must-see live act with his unmatchable energy, and continuous flow of hits such as Deception Bay, Oh My, Does This Last, Never Enough & Don’t Waste Your Love.`,
          spotify: {
            profileUrl:
              "https://open.spotify.com/artist/1SFz3S9eSUTc49ysstadiO?si=C3KO89rcTbeJqZzsdedesA",
            embedUrl:
              "https://open.spotify.com/embed/artist/1SFz3S9eSUTc49ysstadiO?utm_source=generator"
          },
          backgroundUrl: "https://assets.codepen.io/152347/boo-seeka.jpg"
        },
        {
          name: "Running Touch",
          description: `Running Touch is a triple threat singer, songwriter and producer.
		His first project ‘A Body Slow’ hit #1 on itunes electronic album. Fast forward to 2018 ‘My Hands’ gained global attention being added to major playlists around the world and voted sexiest song by Triple J listeners.  His follow up Single a collaboration with Hayden James ‘Better Together’ is an international hit that reached #1 on iTunes USA.`,
          spotify: {
            profileUrl:
              "https://open.spotify.com/artist/5bdwzvp6eirvqh0TwOwjgE?si=89zOMpUxQ-yHGnDcYs0M_w",
            embedUrl:
              "https://open.spotify.com/embed/artist/5bdwzvp6eirvqh0TwOwjgE?utm_source=generator"
          },
          backgroundUrl: "https://assets.codepen.io/152347/running-touch.jpg"
        }
      ]
    };
  },
  methods: {
    nextSlide() {
      if (this.active <= this.artists.length) {
        this.active = this.active += 1;
      }
    },
    prevSlide() {
      if (this.active > 0) {
        this.active = this.active + -1;
      }
    }
  }
};

const _hoisted_1 = ["onClick"];
const _hoisted_2 = { class: "section-content" };
const _hoisted_3 = { class: "inner" };
const _hoisted_4 = { class: "bio" };
const _hoisted_5 = ["href"];
const _hoisted_6 = /*#__PURE__*/createElementVNode("img", {
  src: "https://assets.codepen.io/152347/spotify-badge.svg",
  alt: "Listen on Spotify",
  width: "176",
  height: "64",
  loading: "lazy"
}, null, -1 /* HOISTED */);
const _hoisted_7 = [
  _hoisted_6
];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("ul", null, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($data.artists, (artist, i) => {
      return (openBlock(), createElementBlock("li", {
        style: normalizeStyle(`background-image: url(${artist.backgroundUrl});`),
        role: "button",
        class: normalizeClass($data.active === i ? 'active' : ''),
        onClick: () => ($data.active = i)
      }, [
        createElementVNode("h3", null, toDisplayString(artist.name), 1 /* TEXT */),
        createElementVNode("div", _hoisted_2, [
          createElementVNode("div", _hoisted_3, [
            createElementVNode("div", _hoisted_4, [
              createElementVNode("h2", null, toDisplayString(artist.name), 1 /* TEXT */),
              createElementVNode("p", null, toDisplayString(artist.description), 1 /* TEXT */),
              createElementVNode("a", {
                href: artist.spotify.profileUrl,
                target: "_blank",
                class: "artist-profile-link md:hidden"
              }, _hoisted_7, 8 /* PROPS */, _hoisted_5)
            ])
          ])
        ])
      ], 14 /* CLASS, STYLE, PROPS */, _hoisted_1))
    }), 256 /* UNKEYED_FRAGMENT */))
  ]))
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "body {\n  font-family: \"Roboto Condensed\", sans-serif;\n  color: #fff;\n  line-height: 24px;\n  font-size: 16px;\n}\n.bio {\n  display: grid;\n  grid-auto-flow: row;\n  grid-template-rows: min-content;\n  grid-gap: 24px;\n}\nul {\n  display: flex;\n  min-height: 750px;\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  list-style-type: none;\n  width: 100%;\n  min-width: 100%;\n  flex-direction: column;\n}\n@media only screen and (min-width: 1280px) {\nul {\n    flex-direction: row;\n}\n}\nli {\n  flex: 1;\n  display: flex;\n  align-items: stretch;\n  cursor: pointer;\n  transition: all 0.35s ease;\n  cursor: pointer;\n  position: relative;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: top center;\n  overflow: hidden;\n}\nli:before {\n  content: \"\";\n  position: absolute;\n  z-index: 20;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(15, 15, 15, 0.75);\n}\nli.active {\n  flex: 6;\n  cursor: default;\n}\nli.active:before {\n  background: linear-gradient(180deg, rgba(15, 15, 15, 0) 0%, #111111 100%);\n}\nh2 {\n  font-size: 36px;\n  line-height: 36px;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n@media only screen and (min-width: 768px) {\nh2 {\n    font-size: 48px;\n    line-height: 48px;\n}\n}\n@media only screen and (min-width: 1280px) {\nh2 {\n    font-size: 64px;\n    line-height: 64px;\n}\n}\nh3 {\n  font-weight: bold;\n  white-space: nowrap;\n  position: absolute;\n  z-index: 30;\n  opacity: 1;\n  top: 50%;\n  left: 50%;\n  transition: top 0.35s, opacity 0.15s;\n  transform-origin: 0 0;\n  font-size: 24px;\n  text-transform: uppercase;\n  transform: translate(-50%, -50%) rotate(0deg);\n}\n@media only screen and (min-width: 1280px) {\nh3 {\n    top: 100%;\n    left: 50%;\n    font-size: 32px;\n    transform: translate(-20px, -50%) rotate(-90deg);\n}\n}\n.active h3 {\n  opacity: 0;\n  top: 200%;\n}\n.section-content {\n  position: relative;\n  z-index: 30;\n  opacity: 0;\n  align-self: flex-end;\n  width: 100%;\n  transition: all 0.35s 0.1s ease-out;\n}\n.active .section-content {\n  opacity: 1;\n}\n.section-content .inner {\n  position: absolute;\n  display: grid;\n  grid-auto-flow: row;\n  grid-template-columns: 1fr;\n  grid-column-gap: 20px;\n  align-items: flex-end;\n  left: 0;\n  bottom: 0;\n  padding: 20px;\n  opacity: 0;\n  transition: opacity 0.25s ease-out;\n}\n@media only screen and (min-width: 768px) {\n.section-content .inner {\n    grid-auto-flow: column;\n    grid-template-columns: calc(100% - 340px) 300px;\n    grid-column-gap: 40px;\n    padding: 40px;\n}\n}\n@media only screen and (min-width: 1280px) {\n.section-content .inner {\n    grid-auto-flow: column;\n    grid-template-columns: 460px 200px;\n    grid-column-gap: 40px;\n    padding: 40px;\n}\n}\n.active .section-content .inner {\n  opacity: 1;\n}\n.artist-profile-link {\n  pointer-events: none;\n}\n.active .artist-profile-link {\n  pointer-events: all;\n}";
styleInject(css_248z);

script.render = render;
script.__file = "tmp/codepen/vuejs/src/pen.vue";

export { script as default };