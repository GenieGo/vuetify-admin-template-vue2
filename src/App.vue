<template>
    <v-app>
        <v-layout>
            <v-navigation-drawer expand-on-hover rail>
                <v-list>
                    <v-list-item
                        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
                        title="Sandra Adams"
                    >
                        vuetify
                    </v-list-item>
                </v-list>

                <v-divider></v-divider>

                <v-list density="compact" nav>
                    <v-list-item
                        prepend-icon="mdi-folder"
                        title="My Files"
                        value="myfiles"
                    >
                        <router-link to="/"> home </router-link>
                    </v-list-item>
                    <v-list-item
                        prepend-icon="mdi-account-multiple"
                        title="Shared with me"
                        value="shared"
                    >
                        <router-link to="/grid-system">GridSystem</router-link>
                    </v-list-item>
                    <v-list-item
                        prepend-icon="mdi-star"
                        title="Starred"
                        value="starred"
                    ></v-list-item>
                </v-list>
            </v-navigation-drawer>

            <v-main style="height: 250px">
                <v-container>
                    <router-view />
                </v-container>
            </v-main>
        </v-layout>
    </v-app>
</template>

<script>
export default {
    name: "App",

    data: () => ({
        // drawer: false
        //
    }),
};
</script>
`
