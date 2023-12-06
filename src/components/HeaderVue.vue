<template>
    <header class="transparent-header nav-on-top bg-white py-3">
        <div class="navigation-header" :class="{'sticky' : isSticky}">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <nav class="navbar navbar-expand-lg nav-secondary nav-primary-hover nav-down-line-active py-2">
                            <a class="navbar-brand" href="#">
                                <p className='text-secondary'>Jordan I.</p>
                            </a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon flaticon-menu flat-small text-primary"></span>
                            </button>

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ms-auto">
                                    <li class="nav-item dropdown mega-dropdown" :class="{'active' : isActive(['#',''])}">
                                        <a class="nav-link" href="#">Home</a>
                                    </li>
                                    <li class="nav-item dropdown mega-dropdown" :class="{'active' : isActive(['#about'])}">
                                        <a class="nav-link" href="#about">About</a>
                                    </li>
                                    <li class="nav-item dropdown mega-dropdown" :class="{'active' : isActive(['#experience'])}">
                                      <a class="nav-link" href="#experience">Experience & Education</a>
                                    </li>
                                    <li class="nav-item dropdown mega-dropdown" :class="{'active' : isActive(['#my-prefered'])}">
                                        <a class="nav-link" href="#my-prefered">My prefered</a>
                                    </li>
                                    <li class="nav-item dropdown mega-dropdown" :class="{'active' : isActive(['#my-portofolio'])}">
                                        <a class="nav-link" href="#my-portofolio" >My portfolio</a>
                                    </li>
                                </ul>
                                <div class="float-end navbar-nav nav-element">
                                </div>
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
        activeSection: null
    };
  },
  methods: {
    handleScroll() {
        this.isSticky = window.scrollY > 500;
        this.updateActiveSection();
    },
    updateActiveSection() {
      const sections = ['#', '#about', '#my-prefered', '#my-portofolio','#experience'];
      for (const section of sections) {
        if (this.isActive(section)) {
          this.activeSection = section;
          break;
        }
      }
    },
    isActive(data){
        this.activeSection
        return data.includes(window.location.hash)
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.updateActiveSection();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
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
  z-index: 1000; /* Pastikan lebih tinggi dari elemen lain di halaman */
}
</style>
