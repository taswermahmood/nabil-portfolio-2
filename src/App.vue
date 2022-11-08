<template>
  <v-app>
    <v-app-bar fixed flat :color="color">
      <v-app-bar-nav-icon v-if="$vuetify.breakpoint.mdAndDown" @click="drawer = true"></v-app-bar-nav-icon>
      <v-navigation-drawer hide-overlay height="100vh" width="500px" :color="color" v-model="drawer" absolute temporary>
        <v-list nav dense>
          <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
            <v-list-item @click="color = '#efe7df'" text v-scroll-to="'#description'">
              <span class="mr-2">Home</span>
            </v-list-item>
            <v-list-item @click="color = '#f0f8ff'" text v-scroll-to="'#proexperience'">
              <span class="mr-2">Professional Experience</span>
            </v-list-item>
            <v-list-item @click="color = '#d0fefe'" text v-scroll-to="'#reexperience'">
              <span class="mr-2">Research Experience</span>
            </v-list-item>
            <v-list-item @click="color = '#d8e8e6'" text v-scroll-to="'#academics'">
              <span class="mr-2">Academics</span>
            </v-list-item>
            <v-list-item @click="color = '#dae4ee'" text v-scroll-to="'#skills'">
              <span class="mr-2">Skills</span>
            </v-list-item>
            <v-list-item @click="color = '#ddd6e1'" text v-scroll-to="'#certificate'">
              <span class="mr-2">Certificates</span>
            </v-list-item>
            <v-list-item @click="color = '#f4f5f0'" text v-scroll-to="'#extraCurricular'">
              <span class="mr-2">Extra-curriculars</span>
            </v-list-item>
            <v-list-item @click="color = '#aabba8'" text v-scroll-to="'#references'">
              <span class="mr-2">References</span>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <div v-if="$vuetify.breakpoint.lgAndUp" class="d-flex align-center">
        <img @click="color = '#efe7df'" v-scroll-to="'#description'" style="width: 3%;" src="./assets/logo.png" alt="">
        <v-btn @click="color = '#f0f8ff'" text v-scroll-to="'#proexperience'">
          <span class="mr-2">Professional Experience</span>
        </v-btn>
        <v-btn @click="color = '#d0fefe'" text v-scroll-to="'#reexperience'">
          <span class="mr-2">Research Experience</span>
        </v-btn>
        <v-btn @click="color = '#d8e8e6'" text v-scroll-to="'#academics'">
          <span class="mr-2">Academics</span>
        </v-btn>
        <v-btn @click="color = '#dae4ee'" text v-scroll-to="'#skills'">
          <span class="mr-2">Skills</span>
        </v-btn>
        <v-btn @click="color = '#ddd6e1'" text v-scroll-to="'#certificate'">
          <span class="mr-2">Certifications</span>
        </v-btn>
        <v-btn @click="color = '#f4f5f0'" text v-scroll-to="'#extraCurricular'">
          <span class="mr-2">Extra-curriculars</span>
        </v-btn>
        <v-btn @click="color = '#aabba8'" text v-scroll-to="'#references'">
          <span class="mr-2">References</span>
        </v-btn>
      </div>
      <v-spacer></v-spacer>
      <!-- <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on" style="padding-right:1%" href="resume.pdf" download="resume.pdf">
            <img width="45px" type="button" src="./assets/resume.png">
          </v-btn>
        </template>
        <span>Download Resume</span>
      </v-tooltip> -->
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <a v-bind="attrs" v-on="on" href="https://www.linkedin.com/in/farhantanvirnabil/" target="_blank">
            <img src="./assets/linkedIn.png">
          </a>
        </template>
        <span>Open LinkedIn</span>
      </v-tooltip>
    </v-app-bar>
    <v-main>
      <DescriptionVue id="description" style="min-height:100vh; background: linear-gradient(#efe7df, #f0f8ff);" />
      <ProExperienceVue id="proexperience" style="min-height:100vh; background: linear-gradient(#f0f8ff, #d0fefe);" />
      <ReExperienceVue id="reexperience" style="min-height:100vh; background: linear-gradient(#d0fefe, #d8e8e6);" />
      <AcademicsVue id="academics" style="min-height:100vh; background: linear-gradient(#d8e8e6, #dae4ee);" />
      <SkillsVue id="skills" style="min-height:100vh; background: linear-gradient(#dae4ee, #ddd6e1);" />
      <CertificateVue id="certificate" style="min-height:100vh; background: linear-gradient(#ddd6e1, #f4f5f0);" />
      <ExtraCurricularVue id="extraCurricular"
        style="min-height:100vh; background: linear-gradient(#f4f5f0, #aabba8);" />
      <ReferanceVue id="references" style="min-height:100vh; background: linear-gradient(#aabba8, #efe7df)" />
    </v-main>
  </v-app>
</template>

<script>
import DescriptionVue from './components/Description.vue';
import ProExperienceVue from './components/ProExperience.vue';
import ReExperienceVue from './components/ReExperience.vue';
import AcademicsVue from './components/Academics.vue';
import SkillsVue from './components/Skills.vue'
import CertificateVue from './components/Certificate.vue';
import ExtraCurricularVue from './components/ExtraCurricular.vue';
import ReferanceVue from './components/Referance.vue';

export default {
  name: 'App',
  components: {
    DescriptionVue,
    ProExperienceVue,
    ReExperienceVue,
    AcademicsVue,
    SkillsVue,
    CertificateVue,
    ExtraCurricularVue,
    ReferanceVue,
  },
  data() {
    return {
      color: "#efe7df",
      drawer: false,
    }
  },
  methods: {
  }
};
</script>
