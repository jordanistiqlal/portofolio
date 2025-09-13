<template>
    <div class="full-row" id="experience">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <h1 class="mb-5 text-uppercase">Education & Experience </h1>
                </div>
                <div class="col-lg-6">
                    <div class="checkbox-group mb-5">
                        <label class="checkbox-wrapper">
                            <input type="checkbox" class="checkbox-input software" v-model="softwaredeveloperCheckbox" id="software-developer" @change="filterExperience">
                            <span class="checkbox-label">Software Developer</span>
                        </label>

                        <label class="checkbox-wrapper">
                            <input type="checkbox" class="checkbox-input education" v-model="educationCheckbox" id="education" @change="filterExperience">
                            <span class="checkbox-label">Education</span>
                        </label>

                        <label class="checkbox-wrapper">
                            <input type="checkbox" class="checkbox-input others" v-model="othersCheckbox" id="others" @change="filterExperience">
                            <span class="checkbox-label">Others</span>
                        </label>
                    </div>

                </div>
                <div class="col-lg-12">
                    <div class="timeline">
                        <div
                            v-for="(item, index) in timelineItems"
                            :key="index"
                            class="timeline-item"
                            :class="{ left: index % 2 === 0, right: index % 2 !== 0 }"
                        >
                            <div class="content">
                                <h3>{{ item.title }}</h3>
                                <div v-for="p in item.positions" :key="p.name">
                                    <h5>{{ p.name }}</h5>
                                    <p>{{ p.period }}</p>
                                </div>
                                <div v-if="item.type == 'study'" class="study-info">
                                    <h6>{{ item.degree }}</h6>
                                    <h6>{{ item.grade }}</h6>
                                </div>
                            </div>

                            <div class="point" :style="{ backgroundColor: item.color || '#3498db' }"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
import timelinejsondata from '../data/timeline.json'

export default {
    data() {
        return {
            timeline : [],
            timelineItems : [],
            softwaredeveloperCheckbox: true,
            educationCheckbox: true,
            othersCheckbox: false
        }
    },
    mounted() {
        this.fetch()
    },
    methods: {
        async fetch(){
            await Promise.all([
                this.TimelimeItem(),
            ])
        },
        async TimelimeItem(){
            try {
                await fetch(this.$api+'/experience.timeline')
                .then(response => response.json())
                .then(data => {
                    this.timeline = data
                    this.timelineItems = data

                    Promise.all([
                        this.filterExperience()
                    ])

                }).catch(error => {
                    console.log(error);
                    
                    this.timeline = timelinejsondata
                    this.timelineItems = timelinejsondata

                    Promise.all([
                        this.filterExperience()
                    ])
                })
            } catch (error) {
                console.log(error);
            }
        },
        async filterExperience(){
            try {
                this.timelineItems = this.timeline

                const filtered = [
                    this.softwaredeveloperCheckbox ? 'software-developer' : null,
                    this.educationCheckbox ? 'education' : null,
                    this.othersCheckbox ? 'others' : null
                ]

                this.timelineItems = this.timelineItems.filter(item => {
                    return filtered.includes(item.type)
                })

            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<style scoped>
    .timeline {
        position: relative;
        max-width: 800px;
        margin: 0 auto;
        padding: 40px 0;
    }
    .timeline::after {
        content: '';
        position: absolute;
        width: 4px;
        background-color: #ccc;
        top: 0;
        bottom: 0;
        left: 50%;
        margin-left: -2px;
    }
    .timeline-item {
        padding: 20px 40px;
        position: relative;
        width: 50%;
    }
    .timeline-item.left {
        left: 0;
        text-align: right;
    }
    .timeline-item.right {
        left: 50%;
        text-align: left;
    }
    .content {
        background: #fff;
        padding: 15px;
        border-radius: 6px;
        position: relative;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .point {
        position: absolute;
        top: 20px;
        width: 30px;
        height: 30px;
        border-radius: 5px;
        rotate: 45deg;
        border: 3px solid #fff;
        z-index: 1;
    }
    .timeline-item.left .point {
        right: -15px;
    }
    .timeline-item.right .point {
        left: -15px;
    }
    .study-info{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .study-info h6{
        margin: 0;
    }
</style>

<style scoped>
@media screen and (max-width: 991.98px){
    .checkbox-group {
        justify-content: center !important;
    }
}
.checkbox-group {
  display: flex;
  gap: 30px; /* jarak antar checkbox */
  justify-content: flex-end; /* condong ke kanan */
  padding-right: 50px;
}

.checkbox-wrapper {
  position: relative;
  display: inline-block;
}

.checkbox-input {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  width: 30px;
  height: 30px;
  transform: rotate(45deg);
  border: 2px solid #ccc;
  border-radius: 6px; /* rounded corner */
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

/* Warna unik */
.checkbox-input.software { border-color: #3498db; }
.checkbox-input.education { border-color: #FFA500; }
.checkbox-input.others { border-color: #808080; }

.checkbox-input.software:checked { background-color: #3498db; }
.checkbox-input.education:checked { background-color: #FFA500; }
.checkbox-input.others:checked { background-color: #808080; }

.checkbox-input:checked::after {
  content: "✔";
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -60%) rotate(-45deg); /* biar lurus di diamond */
  font-size: 24px;
  color: white;
  font-weight: bold;
}

/* Label hidden by default */
.checkbox-label {
  position: absolute;
  top: 40px; /* muncul di bawah kotak */
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s;
}

/* Show label on hover */
.checkbox-input:hover + .checkbox-label {
  opacity: 1;
}
</style>