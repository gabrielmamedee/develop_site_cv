<template>
  <ul>
    <li
      v-for="(artist, i) in artists"
      :style="`background-image: url(${artist.backgroundUrl});`"
      role="button"
      :class="active === i ? 'active' : ''"
      @click="() => (active = i)"
    >
      <h3>{{ artist.name }}</h3>
      <div class="section-content">
        <div class="inner">
          <div class="bio">
            <h2>{{ artist.name }}</h2>
            <p>
              {{ artist.description }}
            </p>

            <a
              :href="artist.spotify.profileUrl"
              target="_blank"
              class="artist-profile-link md:hidden"
            >
              <img
                src="https://assets.codepen.io/152347/spotify-badge.svg"
                alt="Listen on Spotify"
                width="176"
                height="64"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<style lang="scss">
body {
  font-family: "Roboto Condensed", sans-serif;
  color: #fff;
  line-height: 24px;
  font-size: 16px;
}

.bio {
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: min-content;
  grid-gap: 24px;
}

ul {
  display: flex;
  min-height: 750px;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  list-style-type: none;
  width: 100%;
  min-width: 100%;
  flex-direction: column;

  @media only screen and (min-width: 1280px) {
    flex-direction: row;
  }
}

li {
  flex: 1;
  display: flex;
  align-items: stretch;
  cursor: pointer;
  transition: all 0.35s ease;
  cursor: pointer;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    z-index: 20;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(15, 15, 15, 0.75);
  }

  &.active {
    flex: 6;
    cursor: default;

    &:before {
      background: linear-gradient(180deg, rgba(15, 15, 15, 0) 0%, #111111 100%);
    }
  }
}

h2 {
  font-size: 36px;
  line-height: 36px;
  font-weight: 700;
  text-transform: uppercase;

  @media only screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 48px;
  }

  @media only screen and (min-width: 1280px) {
    font-size: 64px;
    line-height: 64px;
  }
}

h3 {
  font-weight: bold;
  white-space: nowrap;
  position: absolute;
  z-index: 30;
  opacity: 1;
  top: 50%;
  left: 50%;
  transition: top 0.35s, opacity 0.15s;
  transform-origin: 0 0;
  font-size: 24px;
  text-transform: uppercase;
  transform: translate(-50%, -50%) rotate(0deg);

  @media only screen and (min-width: 1280px) {
    top: 100%;
    left: 50%;
    font-size: 32px;
    transform: translate(-20px, -50%) rotate(-90deg);
  }

  .active & {
    opacity: 0;
    top: 200%;
  }
}

.section-content {
  position: relative;
  z-index: 30;
  opacity: 0;
  align-self: flex-end;
  width: 100%;
  transition: all 0.35s 0.1s ease-out;

  .active & {
    opacity: 1;
  }

  .inner {
    position: absolute;
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: 1fr;
    grid-column-gap: 20px;
    align-items: flex-end;
    left: 0;
    bottom: 0;
    padding: 20px;
    opacity: 0;
    transition: opacity 0.25s ease-out;

    @media only screen and (min-width: 768px) {
      grid-auto-flow: column;
      grid-template-columns: calc(100% - 340px) 300px;
      grid-column-gap: 40px;
      padding: 40px;
    }

    @media only screen and (min-width: 1280px) {
      grid-auto-flow: column;
      grid-template-columns: 460px 200px;
      grid-column-gap: 40px;
      padding: 40px;
    }

    .active & {
      opacity: 1;
    }
  }
}

.artist-profile-link {
  pointer-events: none;

  .active & {
    pointer-events: all;
  }
}
</style>

<script>
export default {
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
</script>
