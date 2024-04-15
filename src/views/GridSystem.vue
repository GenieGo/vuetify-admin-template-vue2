<template>
    <v-container fluid>
        <v-card class="pa-3">
            <v-row dense>
                <v-col>
                    <v-card class="pa-3" outlined>col </v-card>
                </v-col>
                <v-col>
                    <v-card class="pa-3" outlined>col </v-card>
                </v-col>
                <v-col>
                    <v-card class="pa-3" outlined>col </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-card class="pa-3" outlined>col </v-card>
                </v-col>
                <v-col>
                    <v-card class="pa-3" outlined>col </v-card>
                </v-col>
                <v-col>
                    <v-card class="pa-3" outlined>col </v-card>
                </v-col>
                <v-col>
                    <v-card class="pa-3" outlined>col </v-card>
                </v-col>
            </v-row>
            <v-row align="end" class="red" :style="{ height: '250px' }">
                <v-col align-self="start">
                    <v-card class="pa-3" outlined>col </v-card>
                </v-col>
                <v-col align-self="center">
                    <v-card class="pa-3" outlined>col </v-card>
                </v-col>
                <v-col>
                    <v-card class="pa-3" outlined>col </v-card>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
