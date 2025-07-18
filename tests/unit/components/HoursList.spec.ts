import Vue from "vue";
import VueRouter from "vue-router";
import { mount, createLocalVue } from "@vue/test-utils";
import HoursList from "@/components/HoursList.vue";

const mockData = [
  {
    hour: "00:00",
    description:
      "A meia-noite marca o início de um novo ciclo, uma página em branco pronta para ser escrita com suas escolhas e ações...",
  },
  {
    hour: "01:01",
    description:
      "Quando os ponteiros marcam 01:01, é hora de ouvir aquela voz interior que tantas vezes fica abafada pela razão...",
  },
];

// Cria localVue e instala VueRouter nele
const localVue = createLocalVue();
localVue.use(VueRouter);

// Cria instância do VueRouter (rota pode ser vazia se não usada diretamente)
const router = new VueRouter();

describe("HoursList.vue", () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => mockData,
    } as Response);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("render hour lists with links", async () => {
    const wrapper = mount(HoursList, {
      localVue,
      router,
      stubs: {
        HourBadge: false,
      },
    });

    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();

    expect(wrapper.text()).toMatch(/00:00/);
    expect(wrapper.text()).toMatch(/01:01/);

    const links = wrapper.findAll("a");
    expect(links.length).toBeGreaterThan(0);
    expect(links.at(0)?.attributes("href")).toContain("/hora/");
  });
});
