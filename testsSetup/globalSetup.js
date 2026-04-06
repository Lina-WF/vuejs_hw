import { createPinia, setActivePinia } from "pinia";
import { beforeEach, vi } from "vitest";

beforeEach(() => {
    setActivePinia(createPinia());

    vi.stubGlobal('localStorage', (() => {
        let store = {};
        return {
            getItem: (key) => store[key] || null,
            setItem: (key, value) => { store[key] = value.toString(); }
        };
    })());
  });