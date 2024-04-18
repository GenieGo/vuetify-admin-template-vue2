<template>
    <v-container>
        <v-card>
            <v-card-title>
                $vuetify.breakpoint.name: {{ $vuetify.breakpoint.name }}
            </v-card-title>

            <v-container class="gray lighten-3">
                <v-card class="pa-3" outlined :height="height">
                    {{ height }}
                </v-card>
            </v-container>
        </v-card>
        <v-card class="mt-5">
            <v-card-title>
                $vuetify.breakpoint.mobile: {{ $vuetify.breakpoint.mobile }}
                {{ $vuetify.breakpoint.mobileBreakpoint }}
            </v-card-title>

            <v-container class="gray lighten-3">
                <v-dialog max-width="500">
                    <template v-slot:activator="{ props: activatorProps }">
                        <v-btn
                            v-bind="activatorProps"
                            color="surface-variant"
                            variant="flat"
                            @click="isActive = true"
                        >
                            Open Dialog
                        </v-btn>
                    </template>

                    <template v-slot:default="{ isActive }">
                        <v-card title="Dialog">
                            <v-card-text>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>

                                <v-btn @click="isActive = false"
                                    >Close Dialog</v-btn
                                >
                            </v-card-actions>
                        </v-card>
                    </template>
                </v-dialog>
            </v-container>
        </v-card>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            isActive: false,
        };
    },
    computed: {
        height() {
            switch (this.$vuetify.breakpoint.name) {
                case "xs":
                    return 100;
                case "sm":
                    return 200;
                case "md":
                    return 300;
                case "lg":
                    return 400;
                default:
                    return 500;
            }
        },
    },
};
</script>

<style lang="scss" scoped></style>
