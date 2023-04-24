<script>
import { ref, reactive, onMounted, onBeforeMount } from "vue";
import draggable from "vuedraggable";
import Paper from "./Paper.vue";
import Text from "./Text.vue";
import Stack from "./Stack.vue";
import TableRow from "./TableRow.vue";
import Input from "./Input.vue";
import Settings from "./Settings.vue";
import Action from "./Action.vue";
import { mapGetters, useStore } from "vuex";

export default {
  name: "MainTable",
  components: {
    draggable,
    Paper,
    Text,
    Stack,
    TableRow,
    Input,
    Settings,
    Action,
  },
  computed: {
    ...mapGetters(["getTotal", "getInputVal"]),
    rowOpened(el) {
      return el.isOpen == true ? "active" : "";
    },
    dragGroupTable() {
      return {
        group: "table",
      };
    },
  },
  data() {
    const store = useStore();
    return {
      dividerPosition: 100,
      drag: false,
      oldId: "",
      newId: "",
      rows: store.state.table.rows,
      tableMenu: ["Отображение столбцов", "Порядок столбцов"],
    };
  },
  methods: {
    rowOpen(e) {
      if (window.matchMedia("(max-width: 650px)").matches) {
        e.target.closest(".table__row").classList.toggle("active");
      }
    },
    onStart() {},
    onEnd(e) {
      this.oldId = e.oldIndex;
      this.newId = e.newIndex;
    },
  },
};
</script>
<style lang="sass">
.table
  display: table
  width: 100%
  border-collapse: collapse
  &__top
    display: table-header-group
  &__body
    display: table-row-group
  &__row
    display: table-row
    cursor: move
  &__textArea
    resize: none
    width: 100%
    border-radius: 4px
    min-height: 145px
    font-family: $text
    font-size: 16px
    color: $black
    padding: 10px
    outline: none
    box-shadow: 0px 0px 3px, inset 0px 1px 2px rgba(255,255,255,0.5)
  &__footer
    display: table-footer-group
  &__cell
    position: relative
    display: table-cell
    &.rightBorder
      border-right:1px solid #BCBCBC
    &.naime-cell
      cursor: default
    &.name-cell
      border-left:1px solid #BCBCBC
      border-right:1px solid #BCBCBC
      width: 25px
    &.rb
      padding-right:9px
      // min-width: 603px
      border-right: 1px solid #bcbcbc
  &__total
    border-radius: 5px
    padding: 15px
    border: 1px dashed #eeeff1
    background: #fbfcfd
.divider
  width: 1px
  min-height: 20px
  height: 100%
  background-color: #BCBCBC
  position: absolute
  top: 0
  z-index: 123
  margin: 0px 2px
  pointer-events: all
  cursor: ew-resize
.start
  opacity: 0
  border:1px dashed $blue
  border-left: 0px
  border-right: 0px
  &>*
    opacity: 0
</style>
<template>
  <Paper
    mt="24px"
    py="32px"
    style="border-radius: 10px; border: 1px dashed #eeeff1"
  >
    <Stack px="15px" style="width: 100%" dir="row" justifyContent="end">
      <Settings :menu="tableMenu" />
    </Stack>
    <div class="table">
      <div class="table__top">
        <div class="table__row">
          <div class="table__cell"></div>
          <div class="table__cell name-cell"></div>

          <div @mouseup="endDragging" class="table__cell naime-cell rb">
            <Stack dir="row" justifyContent="space-between">
              <Text
                style="white-space: nowrap; overflow: hidden"
                color="black"
                weight="semibold"
                >Наименование единицы</Text
              >
            </Stack>
          </div>

          <div class="table__cell naime-cell">
            <Text color="black" weight="semibold">Цена</Text>
          </div>
          <div class="table__cell naime-cell">
            <Text color="black" weight="semibold">Кол-во</Text>
          </div>
          <div class="table__cell naime-cell">
            <Text color="black" weight="semibold">Название</Text>
          </div>
          <div class="table__cell naime-cell">
            <Text color="black" weight="semibold">Итого:</Text>
          </div>
        </div>
      </div>
      <draggable
        @start="onStart"
        @end="onEnd"
        item-key="id"
        v-model="$store.state.table.rows"
        class="table__body"
        ghost-class="start"
        tag="div"
        :put="() => true"
      >
        <template #item="{ element: item }">
          <div
            @click.native="($event) => rowOpen($event)"
            :class="['table__row', item.isOpen]"
          >
            <div class="table__cell number">
              <Stack ml="15px" spacing="5px" alignItems="center">
                <img src="/icons/Burger.png" width="11" height="12" alt="" />
                <Text color="black" fontSize="16px" fontFamily="secondary">{{
                  item.id
                }}</Text>
              </Stack>
            </div>
            <div class="table__cell">
              <Action :id="item.id" />
              <!-- <svg
                width="3px"
                height="13px"
                viewBox="0 0 3 13"
                version="1.1"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.499 0L1.501 0Q1.57464 0 1.64793 0.00721809Q1.72121 0.0144362 1.79344 0.0288029Q1.86567 0.0431695 1.93614 0.0645464Q2.00661 0.0859233 2.07464 0.114105Q2.14268 0.142286 2.20762 0.177Q2.27257 0.211714 2.3338 0.252627Q2.39503 0.29354 2.45196 0.340257Q2.50888 0.386975 2.56095 0.439047Q2.61303 0.491119 2.65974 0.548044Q2.70646 0.60497 2.74737 0.6662Q2.78829 0.727431 2.823 0.792376Q2.85771 0.857322 2.8859 0.925357Q2.91408 0.993393 2.93545 1.06386Q2.95683 1.13433 2.9712 1.20656Q2.98556 1.27879 2.99278 1.35207Q3 1.42536 3 1.499L3 1.501Q3 1.57464 2.99278 1.64793Q2.98556 1.72121 2.9712 1.79344Q2.95683 1.86567 2.93545 1.93614Q2.91408 2.00661 2.8859 2.07464Q2.85771 2.14268 2.823 2.20762Q2.78829 2.27257 2.74737 2.3338Q2.70646 2.39503 2.65974 2.45196Q2.61303 2.50888 2.56095 2.56095Q2.50888 2.61303 2.45196 2.65974Q2.39503 2.70646 2.3338 2.74737Q2.27257 2.78829 2.20762 2.823Q2.14268 2.85771 2.07464 2.8859Q2.00661 2.91408 1.93614 2.93545Q1.86567 2.95683 1.79344 2.9712Q1.72121 2.98556 1.64793 2.99278Q1.57464 3 1.501 3L1.499 3Q1.42536 3 1.35207 2.99278Q1.27879 2.98556 1.20656 2.9712Q1.13433 2.95683 1.06386 2.93545Q0.993393 2.91408 0.925357 2.8859Q0.857322 2.85771 0.792376 2.823Q0.727431 2.78829 0.6662 2.74737Q0.60497 2.70646 0.548044 2.65974Q0.491119 2.61303 0.439047 2.56095Q0.386975 2.50888 0.340257 2.45196Q0.29354 2.39503 0.252627 2.3338Q0.211714 2.27257 0.177 2.20762Q0.142286 2.14268 0.114105 2.07464Q0.0859233 2.00661 0.0645464 1.93614Q0.0431695 1.86567 0.0288029 1.79344Q0.0144362 1.72121 0.00721809 1.64793Q0 1.57464 0 1.501L0 1.499Q0 1.42536 0.00721809 1.35207Q0.0144362 1.27879 0.0288029 1.20656Q0.0431695 1.13433 0.0645464 1.06386Q0.0859233 0.993393 0.114105 0.925357Q0.142286 0.857322 0.177 0.792376Q0.211714 0.727431 0.252627 0.6662Q0.29354 0.60497 0.340257 0.548044Q0.386975 0.491119 0.439047 0.439047Q0.491119 0.386975 0.548045 0.340257Q0.60497 0.29354 0.6662 0.252627Q0.727431 0.211714 0.792376 0.177Q0.857322 0.142286 0.925357 0.114105Q0.993393 0.0859233 1.06386 0.0645464Q1.13433 0.0431695 1.20656 0.0288029Q1.27879 0.0144362 1.35207 0.00721809Q1.42536 0 1.499 0ZM1.499 5L1.501 5Q1.57464 5 1.64793 5.00722Q1.72121 5.01444 1.79344 5.0288Q1.86567 5.04317 1.93614 5.06455Q2.00661 5.08592 2.07464 5.1141Q2.14268 5.14229 2.20762 5.177Q2.27257 5.21171 2.3338 5.25263Q2.39503 5.29354 2.45196 5.34026Q2.50888 5.38698 2.56095 5.43905Q2.61303 5.49112 2.65974 5.54804Q2.70646 5.60497 2.74737 5.6662Q2.78829 5.72743 2.823 5.79238Q2.85771 5.85732 2.8859 5.92536Q2.91408 5.99339 2.93545 6.06386Q2.95683 6.13433 2.9712 6.20656Q2.98556 6.27879 2.99278 6.35207Q3 6.42536 3 6.499L3 6.501Q3 6.57464 2.99278 6.64793Q2.98556 6.72121 2.9712 6.79344Q2.95683 6.86567 2.93545 6.93614Q2.91408 7.00661 2.8859 7.07464Q2.85771 7.14268 2.823 7.20762Q2.78829 7.27257 2.74737 7.3338Q2.70646 7.39503 2.65974 7.45196Q2.61303 7.50888 2.56095 7.56095Q2.50888 7.61303 2.45196 7.65974Q2.39503 7.70646 2.3338 7.74737Q2.27257 7.78828 2.20762 7.823Q2.14268 7.85771 2.07464 7.88589Q2.00661 7.91408 1.93614 7.93545Q1.86567 7.95683 1.79344 7.9712Q1.72121 7.98556 1.64793 7.99278Q1.57464 8 1.501 8L1.499 8Q1.42536 8 1.35207 7.99278Q1.27879 7.98556 1.20656 7.9712Q1.13433 7.95683 1.06386 7.93545Q0.993393 7.91408 0.925357 7.88589Q0.857322 7.85771 0.792376 7.823Q0.727431 7.78829 0.6662 7.74737Q0.60497 7.70646 0.548044 7.65974Q0.491119 7.61303 0.439047 7.56095Q0.386975 7.50888 0.340257 7.45196Q0.29354 7.39503 0.252627 7.3338Q0.211714 7.27257 0.177 7.20762Q0.142286 7.14268 0.114105 7.07464Q0.0859233 7.00661 0.0645464 6.93614Q0.0431695 6.86567 0.0288029 6.79344Q0.0144362 6.72121 0.00721809 6.64793Q0 6.57464 0 6.501L0 6.499Q0 6.42536 0.00721809 6.35207Q0.0144362 6.27879 0.0288029 6.20656Q0.0431695 6.13433 0.0645464 6.06386Q0.0859233 5.99339 0.114105 5.92536Q0.142286 5.85732 0.177 5.79238Q0.211714 5.72743 0.252627 5.6662Q0.29354 5.60497 0.340257 5.54804Q0.386975 5.49112 0.439047 5.43905Q0.491119 5.38698 0.548045 5.34026Q0.60497 5.29354 0.6662 5.25263Q0.727431 5.21171 0.792376 5.177Q0.857322 5.14229 0.925357 5.1141Q0.993393 5.08592 1.06386 5.06455Q1.13433 5.04317 1.20656 5.0288Q1.27879 5.01444 1.35207 5.00722Q1.42536 5 1.499 5ZM1.499 10L1.501 10Q1.57464 10 1.64793 10.0072Q1.72121 10.0144 1.79344 10.0288Q1.86567 10.0432 1.93614 10.0645Q2.00661 10.0859 2.07464 10.1141Q2.14268 10.1423 2.20762 10.177Q2.27257 10.2117 2.3338 10.2526Q2.39503 10.2935 2.45196 10.3403Q2.50888 10.387 2.56095 10.439Q2.61303 10.4911 2.65974 10.548Q2.70646 10.605 2.74737 10.6662Q2.78829 10.7274 2.823 10.7924Q2.85771 10.8573 2.8859 10.9254Q2.91408 10.9934 2.93545 11.0639Q2.95683 11.1343 2.9712 11.2066Q2.98556 11.2788 2.99278 11.3521Q3 11.4254 3 11.499L3 11.501Q3 11.5746 2.99278 11.6479Q2.98556 11.7212 2.9712 11.7934Q2.95683 11.8657 2.93545 11.9361Q2.91408 12.0066 2.8859 12.0746Q2.85771 12.1427 2.823 12.2076Q2.78829 12.2726 2.74737 12.3338Q2.70646 12.395 2.65974 12.452Q2.61303 12.5089 2.56095 12.561Q2.50888 12.613 2.45196 12.6597Q2.39503 12.7065 2.3338 12.7474Q2.27257 12.7883 2.20762 12.823Q2.14268 12.8577 2.07464 12.8859Q2.00661 12.9141 1.93614 12.9355Q1.86567 12.9568 1.79344 12.9712Q1.72121 12.9856 1.64793 12.9928Q1.57464 13 1.501 13L1.499 13Q1.42536 13 1.35207 12.9928Q1.27879 12.9856 1.20656 12.9712Q1.13433 12.9568 1.06386 12.9355Q0.993393 12.9141 0.925357 12.8859Q0.857322 12.8577 0.792376 12.823Q0.727431 12.7883 0.6662 12.7474Q0.60497 12.7065 0.548044 12.6597Q0.491119 12.613 0.439047 12.561Q0.386975 12.5089 0.340257 12.452Q0.29354 12.395 0.252627 12.3338Q0.211714 12.2726 0.177 12.2076Q0.142286 12.1427 0.114105 12.0746Q0.0859233 12.0066 0.0645464 11.9361Q0.0431695 11.8657 0.0288029 11.7934Q0.0144362 11.7212 0.00721809 11.6479Q0 11.5746 0 11.501L0 11.499Q0 11.4254 0.00721809 11.3521Q0.0144362 11.2788 0.0288029 11.2066Q0.0431695 11.1343 0.0645464 11.0639Q0.0859233 10.9934 0.114105 10.9254Q0.142286 10.8573 0.177 10.7924Q0.211714 10.7274 0.252627 10.6662Q0.29354 10.605 0.340257 10.548Q0.386975 10.4911 0.439047 10.439Q0.491119 10.387 0.548045 10.3403Q0.60497 10.2935 0.6662 10.2526Q0.727431 10.2117 0.792376 10.177Q0.857322 10.1423 0.925357 10.1141Q0.993393 10.0859 1.06386 10.0645Q1.13433 10.0432 1.20656 10.0288Q1.27879 10.0144 1.35207 10.0072Q1.42536 10 1.499 10Z"
                  id="Combined-Shape"
                  fill="#A6B7D4"
                  fill-rule="evenodd"
                  stroke="none"
                />
              </svg> -->
            </div>
            <div class="table__cell rb">
              <p class="table__label">Наименование товара:</p>
              <Input style="width: 100%" :value="item.name" />
            </div>
            <div class="table__cell">
              <p class="table__label">Цена:</p>
              <Input :value="item.price" />
            </div>
            <div class="table__cell">
              <p class="table__label">Кол-во:</p>
              <Input :value="12" />
            </div>
            <div class="table__cell">
              <p class="table__label">Название товара:</p>
              <Input :value="item.name" />
            </div>
            <div class="table__cell">
              <p class="table__label">Итого:</p>
              <Input :value="item.price * item.count" />
            </div>
          </div>
        </template>
      </draggable>

      <div class="table__footer">
        <div class="table__row">
          <div class="table__cell"></div>
          <div class="table__cell"></div>
          <div class="table__cell">
            <Input style="width: 100%" v-model="$store.state.table.inputVal" />
            <!-- <textarea class="table__textArea"></textarea> -->
          </div>
          <div class="table__cell"></div>
          <div class="table__cell"></div>
          <div class="table__cell"></div>
          <div class="table__cell">
            <div class="table__total">
              <Stack mb="13px" justifyContent="space-between">
                <Text style="color: #8f8f8f" fontFamily="secondary"
                  >Сумма:</Text
                >
                <Text color="black" fontFamily="secondary"
                  >{{ getTotal.totalPrice }} руб</Text
                >
              </Stack>
              <Stack mb="13px" justifyContent="space-between">
                <Text style="color: #8f8f8f" fontFamily="secondary"
                  >Кол-во:</Text
                >
                <Text color="black" fontFamily="secondary"
                  >{{ getTotal.count }} шт.</Text
                >
              </Stack>
              <Stack mb="13px" justifyContent="space-between">
                <Text style="color: #8f8f8f" fontFamily="secondary"
                  >Общий вес:</Text
                >
                <Text color="black" fontFamily="secondary">
                  {{ getTotal.weight }} кг</Text
                >
              </Stack>
            </div>
            <div style="margin-top: 5px" class="table__total">
              <Stack justifyContent="space-between">
                <Text style="color: #8f8f8f" fontFamily="secondary"
                  >Итого:</Text
                >
                <Text color="black" fontFamily="secondary">
                  {{ getTotal.totalPrice }} руб</Text
                >
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Paper>
</template>
