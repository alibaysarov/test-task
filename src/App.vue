<script>
import NavMenu from "./components/NavMenu.vue";
import Container from "./components/Container.vue";
import Text from "./components/Text.vue";
import Stack from "./components/Stack.vue";
import Settings from "./components/Settings.vue";
import Paper from "./components/Paper.vue";
import Button from "./components/Button.vue";
import MainTable from "./components/MainTable.vue";
import Burger from "./components/Burger.vue";
import MobileMenu from "./components/MobileMenu.vue";
export default {
  name: "App",
  components: {
    NavMenu,
    Container,
    Text,
    Stack,
    Settings,
    Paper,
    Button,
    MainTable,
    Burger,
    MobileMenu,
  },
  methods: {
    addProduct() {
      this.$store.commit("addRow");
    },
  },

  computed: {
    renderMobMenu() {
      if (
        window.matchMedia("(max-width:1024px)").matches &&
        this.isMobileMenuOpened == true
      ) {
        return true;
      }
    },
  },
};
</script>

<template>
  <MobileMenu v-if="this.$store.state.table.menuShown == true" />
  <NavMenu />
  <Container>
    <Stack justifyContent="start" alignItems="center" spacing="15px">
      <Burger />
      <Text type="h1" color="black">Проведение ТО и мелкий ремонт</Text>
    </Stack>
    <Stack
      mt="20px"
      dir="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Stack spacing="16px" alignItems="center">
        <Text color="blue">Общее</Text>
        <Text color="text">Товар списания</Text>
        <Text color="blue">Доп. расходы</Text>
      </Stack>
      <Settings />
    </Stack>
    <Paper
      mt="24px"
      py="20px"
      px="20px"
      style="border-radius: 10px; border: 1px dashed #eeeff1"
    >
      <Button @click="addProduct" icon="/public/icons/Plus.png"
        >Добавить строку</Button
      >
    </Paper>
    <MainTable />
  </Container>
</template>
