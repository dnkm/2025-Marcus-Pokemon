<div class="titleBackground">
  <div class="hero-content-wrapper">
    <div class="title animate-fade-in-down">
      <div>
        <span>Pokémon Game</span>
        <span>Planner</span>
      </div>
      <p class="subtitle">Master your strategy across every generation</p>
    </div>

    <div class="button-container animate-fade-in-up">
      <a class="homeButton" href="/game-select">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="button-icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
          />
        </svg>
        <div>
          <span class="button-title">Plan Team</span>
          <span class="button-desc">Build your perfect Pokémon team</span>
        </div>
      </a>

      <a class="homeButton" href="/guides">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="button-icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
          />
        </svg>
        <div>
          <span class="button-title">Guides</span>
          <span class="button-desc">Learn essential game mechanics</span>
        </div>
      </a>
    </div>

    <!-- Footer -->
    <footer class="footer-section">
      <div class="footer-content">
        <p class="footer-main">
          Made with ❤️ and passion for Pokémon by <strong>Marcus Chung</strong>
        </p>
        <div class="footer-credits">
          <p>Powered by:</p>
          <div class="footer-links">
            <a
              href="https://pokeapi.co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              PokéAPI
            </a>
            <span>•</span>
            <a
              href="https://github.com/PokeAPI/pokedex-promise-v2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pokedex Promise v2
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</div>

<style>
  .hero-content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 64px);
    padding: 2rem;
    gap: 3rem;
  }

  .subtitle {
    color: rgba(255, 255, 255, 0.9);
    font-size: clamp(16px, 4vw, 24px);
    font-weight: 300;
    margin-top: 1rem;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  .button-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    max-width: 500px;
  }

  .homeButton {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 1.5rem 2rem;
    background: rgba(0, 0, 0, 0.6);
    border: 2px solid rgba(255, 255, 255, 0.8);
    border-radius: 12px;
    color: white;
    font-family: "Funnel Display", sans-serif;
    text-decoration: none;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  }

  .homeButton:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: white;
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  }

  .homeButton:active {
    transform: translateY(-2px) scale(1.01);
  }

  .button-icon {
    width: 48px;
    height: 48px;
    flex-shrink: 0;
  }

  .homeButton > div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    flex-grow: 1;
  }

  .button-title {
    font-size: clamp(24px, 5vw, 32px);
    font-weight: 600;
  }

  .button-desc {
    font-size: clamp(14px, 3vw, 16px);
    opacity: 0.9;
    font-weight: 300;
  }

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in-down {
    animation: fadeInDown 0.8s ease-out;
  }

  .animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out 0.2s both;
  }

  .footer-section {
    margin-top: auto;
    padding: 2rem 1rem;
    text-align: center;
  }

  .footer-content {
    color: rgba(255, 255, 255, 0.95);
    font-size: 14px;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .footer-main {
    font-size: 16px;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  }

  .footer-main strong {
    font-weight: 700;
    color: white;
  }

  .footer-credits {
    opacity: 0.85;
    font-size: 13px;
  }

  .footer-credits p {
    margin-bottom: 0.25rem;
  }

  .footer-links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .footer-links a {
    color: rgba(255, 255, 255, 0.95);
    text-decoration: underline;
    transition: color 0.2s ease;
  }

  .footer-links a:hover {
    color: white;
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 640px) {
    .hero-content-wrapper {
      gap: 2rem;
      padding: 1rem;
    }

    .homeButton {
      padding: 1.25rem 1.5rem;
      gap: 1rem;
    }

    .button-icon {
      width: 36px;
      height: 36px;
    }
  }
</style>
