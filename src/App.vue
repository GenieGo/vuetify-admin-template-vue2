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

                <v-list
                    v-for="item in items"
                    :key="item.title"
                    density="compact"
                    nav
                >
                    <v-list-item
                        prepend-icon="mdi-folder"
                        title="My Files"
                        value="myfiles"
                    >
                        <router-link :to="item.to">
                            {{ item.title }}
                        </router-link>
                    </v-list-item>
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
        items: [
            { title: "Dashboard", icon: "mdi-image", to: "/" },
            { title: "Grid system", icon: "mdi-image", to: "/grid-system" },
            { title: "Breakpoints", icon: "mdi-image", to: "/breakpoints" },
            {
                title: "Grid List Page",
                icon: "mdi-image",
                to: "/grid-list-page",
            },
            { title: "Typography", icon: "mdi-image", to: "/typography" },
        ],
    }),
};
</script>
`
