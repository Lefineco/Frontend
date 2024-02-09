<template>
    <Submenu label="Captions">
        <template #icon>
            <media-icon class="h-5 w-5" type="closed-captions" />
        </template>
        <template #content>
            <media-captions-radio-group class="w-full flex flex-col">
                <!-- eslint-disable-next-line vue/no-lone-template -->
                <template>
                    <RoomPlayerMenusMenuRadio />
                </template>
            </media-captions-radio-group>
        </template>
    </Submenu>
</template>