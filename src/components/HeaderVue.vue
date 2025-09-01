<template>
  <header class="transparent-header nav-on-top bg-white py-3">
    <div class="navigation-header" :class="{'sticky' : isSticky}">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <nav class="navbar navbar-expand-lg nav-secondary nav-primary-hover nav-down-line-active py-2">
              <a class="navbar-brand" href="#">
                <p class="text-secondary">Jordan Istiqlal.</p>
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon flaticon-menu flat-small text-primary"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item" :class="{ active: activeSection === '#'}">
                    <a class="nav-link" href="#">Home</a>
                  </li>
                  <li class="nav-item" :class="{ active: activeSection === '#timeline'}">
                    <a class="nav-link" href="#timeline">Experience</a>
                  </li>
                  <!-- <li class="nav-item" :class="{ active: activeSection === '#about'}">
                    <a class="nav-link" href="#about">About</a>
                  </li>
                  <li class="nav-item" :class="{ active: activeSection === '#experience'}">
                    <a class="nav-link" href="#experience">Experience & Education</a>
                  </li> -->
                  <li class="nav-item" :class="{ active: activeSection === '#languange'}">
                    <a class="nav-link" href="#languange">Languange</a>
                  </li>
                  <li class="nav-item" :class="{ active: activeSection === '#preferred'}">
                    <a class="nav-link" href="#preferred">Preferred</a>
                  </li>
                  <li class="nav-item" :class="{ active: activeSection === '#my-portofolio'}">
                    <a class="nav-link" href="#my-portofolio">My portfolio</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isSticky: false,
      activeSection: "#",
      observer: null,
      sections: ["#", "#about", "#timeline", "#languange", "#preferred", "#my-portofolio", "#experience"],
    };
  },
  methods: {
    handleScroll() {
      this.isSticky = window.scrollY > 50;

      if (window.scrollY < 100) {
        this.activeSection = "#";
        history.replaceState(null, null, this.activeSection);
      }
    },
    initObserver() {
      const options = { threshold: 0.3 }; // setengah layar dianggap aktif
      this.observer = new IntersectionObserver((entries) => {     
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection = "#" + entry.target.id;
            history.replaceState(null, null, this.activeSection); // update hash di URL tanpa reload
          }
        });
      }, options);

      this.sections.forEach((id) => {
        const el = document.querySelector(id === "#" ? "body" : id);
        if (el) this.observer.observe(el);
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.initObserver();
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    if (this.observer) this.observer.disconnect();
  },
};
</script>

<style>
  .sticky {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: white;
    transition: background-color 1s ease;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }
  .nav-item.active .nav-link {
    color: #0d6efd;
    font-weight: bold;
  }
</style>
