import { ref, computed, Ref, ComputedRef } from 'vue'
import { deleteRequest, getRequest, postRequest, putRequest } from '../http';

// Type used must have an id.
export const storeModuleFactory = <Type extends { id: number }> (moduleName: string) => {
    
    // Type of state must be explicit, otherwise Ref<UnwrapRef<Type[]>> is inferred.
    // .value then returns UnwrapRefSimple<Type>[] instead of Type[].
    const state: Ref<Type[]> = ref([]);

    const getters = {
        all: computed(() => state.value) as ComputedRef<Type[]>,
        getById: (id: number) => computed(() => state.value[id])
    };

    const setters = {
        setAll: (items: Type[]) => {
            for (const item of items) state.value[item.id] = Object.freeze(item);
        },

        deleteByItem: (item: Type) => {
            delete state.value[item.id];
        }
    }


    const actions = {
        getAll: async () => {
            const { data } = await getRequest(moduleName);
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


