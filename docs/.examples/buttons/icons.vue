<template>
    <div>
        <v-row>
            <v-col cols="auto">
                <v-btn icon><i class="ri-vuejs-fill"/></v-btn>
            </v-col>

            <v-col cols="auto">
                <v-btn icon aur-type="secondary"><i class="ri-vuejs-fill"/></v-btn>
            </v-col>

            <v-col cols="auto">
                <v-btn icon disabled><i class="ri-vuejs-fill"/></v-btn>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="auto">
                <v-btn>
                    <i class="ri-vuejs-fill pr-xs"/> Default
                </v-btn>
            </v-col>

            <v-col cols="auto">
                <v-btn aur-type="primary">
                    <i class="ri-vuejs-fill pr-xs"/> Primary
                </v-btn>
            </v-col>

            <v-col cols="auto">
                <v-btn aur-type="secondary">
                    <i class="ri-vuejs-fill pr-xs"/> Secondary
                </v-btn>
            </v-col>

            <v-col cols="auto">
                <v-btn disabled>
                    <i class="ri-vuejs-fill pr-xs"/> Disabled
                </v-btn>
            </v-col>
        </v-row>
    </div>
</template>
