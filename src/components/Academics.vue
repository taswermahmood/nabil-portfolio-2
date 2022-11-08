<template>
    <v-row style="padding: 5% 5%" class="text-center">
        <v-col class="pa-2 align-self-center text-left" cols="12">
            <div data-aos-duration="1500" data-aos="fade-down" style="padding-bottom:2%">
                <div style="font-family: 'Lilita One', cursive; font-size: 40px;"> Academic Credentials</div>
                <div style="font-weight:bold; padding-top:1%"> Bachelor of Science in Civil Engineering </div>
                <div>Military Institute of Science and Technology (MIST) </div>
                <div>Mirpur, Dhaka, Bangladesh</div>
                <div>Major: Geotech Engineering, Minor: Structural Engineering</div>
                <div>CGPA: 3.27/4.00 (February 2018- March 2022)</div>
                <div style="font-weight:bold; padding-top:1%"> Higher Secondary School Certificate </div>
                <div>Notre Dame College</div>
                <div>GPA: 5.00/5.00 (2015-2017)</div>
            </div>
            <div data-aos-duration="1500" data-aos="fade-right" style="padding-bottom:2%">
                <div style="font-family: 'Lilita One', cursive; font-size: 40px; padding-bottom: 1%;">Standardized Test
                    Scores</div>
                <v-simple-table style="width:500px">
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-left text-h6">
                                    Total
                                </th>
                                <th class="text-left text-h6">
                                    Quantitative
                                </th>
                                <th class="text-left text-h6">
                                    Verbal
                                </th>
                                <th class="text-left text-h6">
                                    Analytical
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in scores" :key="item.total">
                                <td class="text-left text-h6">{{ item.total }}</td>
                                <td class="text-left text-h6">{{ item.quantitative }}</td>
                                <td class="text-left text-h6">{{ item.verbal }}</td>
                                <td class="text-left text-h6">{{ item.analytical }}</td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </div>
        </v-col>
    </v-row>
</template>
  
<script>
export default {
    name: 'Academics',
    data() {
        return {
            scores: [
                {
                    total: 300,
                    quantitative: 156,
                    verbal: 144,
                    analytical: 3,
                },
            ],
        }
    },
}
</script>