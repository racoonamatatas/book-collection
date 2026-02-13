import { ref, computed, Ref, ComputedRef } from 'vue'
import { deleteRequest, getRequest, postRequest, putRequest } from '../http';

// Type used must have an id.
export const storeModuleFactory = <Type extends { id: number }> (moduleName: string) => {
    
    // The ref contains a single object with keys of type number and values of type Type.
    const state = ref<Record<number,Type>>({});

    const getters = {
        all: computed(() => state.value),
        getById: (id: number) => computed(() => state.value[id])
    };

    const setters = {
        setAll: (items: Type[]) => {
            for (const item of items) {
                  state.value[item.id] = Object.freeze(item);
            } 
        },

       
        deleteByItem: (item: Type) => {
            delete state.value[item.id];
        }
    }


    const actions = {
        getAll: async () => {
            const { data }: {data: Type[]} = await getRequest(moduleName);
            if (!data) return;
            setters.setAll(data);
        },

        create: async (item: Type) => {
            const { data } = await postRequest(moduleName, item);
            if (!data) return;
            setters.setAll(data);
        },

        update: async (id: number, item: Type) => {
            const { data } = await putRequest(`${moduleName}/${id}`, item);
            if (!data) return;
            setters.setAll(data);
        },

        delete: async (id: number) => {
            await deleteRequest(`${moduleName}/${id}`);
            setters.deleteByItem(getters.getById(id).value);
        }
    };

    return { getters, setters, actions };
}


