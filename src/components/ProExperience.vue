<template>
    <v-row style="padding: 5% 5% ;" class="text-center">
        <div data-aos-duration="1500" data-aos="fade-left" class="pa-2 align-self-center text-left">
            <v-row style="padding-bottom:2%">
                <v-col cols="12">
                    <div style="font-family: 'Lilita One', cursive; font-size: 40px;"> Professional Experience</div>
                </v-col>
                <v-row style="padding-left:2%" justify="center">
                    <v-col cols="4">
                        <v-card flat style="background-color:transparent" class="mx-auto" height="575px" max-width="480">
                            <v-carousel cycle height="260" hide-delimiter-background show-arrows-on-hover>
                                <v-carousel-item>
                                    <v-img src="../assets/pro1.jpg"> </v-img>
                                </v-carousel-item>
                                <v-carousel-item>
                                    <v-img src="../assets/pro2.jpg"> </v-img>
                                </v-carousel-item>
                                <v-carousel-item>
                                    <v-img src="../assets/pro3.jpg"> </v-img>
                                </v-carousel-item>
                                <v-carousel-item>
                                    <v-img src="../assets/pro4.jpg"> </v-img>
                                </v-carousel-item>
                            </v-carousel>
                            <v-card-title>Assistant Engineer/ Research Assistant</v-card-title>
                            <v-card-text class="text--primary">
                                <div style="font-weight:bold">Military Institute of Science and Technology (MIST)</div>
                                <div style="font-weight:bold">August 2022-Present</div>
                                <div>As an assistant engineer, I supervised the soil investigation at field of Ananta
                                    Hotel
                                    and
                                    Resort Ltd. project
                                    and 40 workers worked under my supervision. I ensured their safety protocols and
                                    systematic
                                    working
                                    environment.
                                </div>
                                <div> As the part of my role of research assistant, I coordinate the lab tests at
                                    Geotech
                                    Laboratory
                                    of MIST and
                                    assembles the reports of the projects. I am also conducting a project on tensile
                                    strength test
                                    of carbon
                                    geotextile using Universal Testing Machine (UTM).</div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="4">
                        <v-card flat style="background-color:transparent" min-height="575px" class="mx-auto" max-width="480">
                            <v-carousel cycle height="260" hide-delimiter-background show-arrows-on-hover>
                                <v-carousel-item>
                                    <v-img src="../assets/intern1.jpg"> </v-img>
                                </v-carousel-item>
                                <v-carousel-item>
                                    <v-img src="../assets/intern2.jpg"> </v-img>
                                </v-carousel-item>
                                <v-carousel-item>
                                    <v-img src="../assets/intern3.jpg"> </v-img>
                                </v-carousel-item>
                            </v-carousel>
                            <v-card-title>Internship</v-card-title>
                            <v-card-text class="text--primary">
                                <div style="font-weight:bold">Homes 71 Ltd.</div>
                                <div style="font-weight:bold">February, 2021 to March, 2021.</div>
                                <div>Worked as an Internship Trainee, as a part of the "Civil Engineering Students
                                    Internship
                                    Program (CESIP-
                                    2021)" at consultancy company, Homes 71 Ltd.
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="4">
                        <v-card flat style="background-color:transparent" height="575px" class="mx-auto" max-width="480">
                            <v-img style="background-color:gainsboro" class="white--text align-end " height="260px" src="">
                            </v-img>
                            <v-card-title>Campus Ambassador</v-card-title>
                            <v-card-text class="text--primary">
                                <div style="font-weight:bold">Shabash FakibajTM, LLC</div>
                                <div style="font-weight:bold">2020-2022 </div>
                                <div>Assisted in increasing the outreach of educational contents of Shabash FakibajTM,
                                    LLC,
                                    an
                                    international
                                    educational platform working for the betterment of the educational system in
                                    Bangladesh
                                    for the
                                    graduate
                                    studies aboard, to more than 10,000 students (per week) on social platform.
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-row>
        </div>
    </v-row>
</template>
<script>
export default {
    name: 'ProExperience',
}
</script>