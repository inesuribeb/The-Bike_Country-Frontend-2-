const BASE_URL = import.meta.env.VITE_BASE_URL;

async function fetchData(pathName, method = "GET", body = null) {
    try {
        const url = new URL(BASE_URL);
        url.pathname = pathName;
        const token = localStorage.getItem("authToken");
        const options = {
            method,
            headers: {
                "Content-Type": "application/json",
                accept: "application/json",
                Authorization: `Bearer ${token ? token : ""}`,
            },
            body: body ? JSON.stringify(body) : null,
        };

        const response = await fetch(url.toString(), options);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}
export async function obtenerPacks() {
    try {
        const packs = await fetchData("pack/api/packs");
        return packs.data;
    } catch (error) {
        console.error("Error al obtener packs:", error);
    }
}
export async function workerLogin() {
    try {
        const body = {
            email: "inesuribeb@gmail.com",
            password: "12345",
        };

        const response = await fetchData(
            "worker/api/workers/login",
            "POST",
            body
        );

        // Validar que el token existe en la respuesta
        if (!response || !response.token) {
            throw new Error("Login failed: token not received");
        }

        // Opcional: Guardar el token en localStorage
        localStorage.setItem("authToken", response.token);

        return response.token; // Devuelve el token
    } catch (error) {
        console.error("Error al obtener el login:", error);
    }
}
export async function clientLogin(body) {
    try {
        const response = await fetchData(
            "client/api/clients/login",
            "POST",
            body
        );

        if (!response || !response.token) {
            throw new Error("Login failed: token not received");
        }

        localStorage.setItem("authToken", response.token);
        localStorage.setItem("authUserId", response.user_id);

        return response.token;
    } catch (error) {
        console.error("Error al obtener el login:", error);
        return null;
    }
}
export async function logout() {
    try {
        if (localStorage.getItem("authToken") != null) {
            localStorage.removeItem("authToken");
        } else {
            throw new Error("No hay token para eliminar");
        }
    } catch (error) {
        console.error("Error al salir:", error);
    }
}

export async function getMyProfile() {
    const user_id = localStorage.getItem("authUserId");

    const response = await fetchData(
        "/client/api/clients/" + user_id,
        "GET",
        null
    );
    return response.data;
}
export async function checkAuthToken() {
    try {
        const token = localStorage.getItem("authToken");
        const user_id = localStorage.getItem("authUserId");
        if (!token) {
            throw new Error("No hay token para verificar");
        }
        const profile = {
            token,
            user_id,
        };
        return profile;
    } catch (error) {
        console.error("Error al verificar el token:", error);
    }
}

export async function getMyBookings() {
    try {
        const response = await fetchData(
            "reservations/api/reservations/",
            "GET",
            null
        );
        return response.data;
    } catch (error) {
        console.error("Error al obtener las reservas:", error);
    }
}

export async function clientRegister(body) {
    try {
        const response = await fetchData(
            "client/api/clients/register",
            "POST",
            body
        );

        if (!response || !response.success) {
            throw new Error(response?.message || "Error en el registro");
        }
    } catch (error) {
        console.error("Error al obtener el register:", error);
        throw error;
    }
}

export async function getAllCountries() {
    try {
        const response = await fetchData(
            "countries/api/countries/",
            "GET",
            null
        );
        return response.data;
    } catch (error) {
        console.error("Error al obtener los países:", error);
    }
}

export async function cancelBooking(bookingId, userId, packId) {
    try {
        const body = {
            user_id: userId,
            pack_id: packId,
        };

        const response = await fetchData(
            `reservations/api/reservations/${bookingId}/cancel`,
            "PUT",
            body
        );

        if (!response || !response.success) {
            throw new Error(
                response?.message || "Error al cancelar la reserva"
            );
        }

        return response;
    } catch (error) {
        console.error("Error al cancelar la reserva:", error);
        throw error;
    }
}

export async function updateClient(userId, userData) {
    try {
        const response = await fetchData(
            `client/api/clients/${userId}/update`,
            "PUT",
            userData
        );

        if (!response || !response.success) {
            throw new Error(response?.message || "Error actualizando datos");
        }

        return response.data;
    } catch (error) {
        console.error("Error al actualizar cliente:", error);
        throw error;
    }
}

export async function createReservation(body) {
    try {
        console.log("Enviando reserva:", body);
        const response = await fetchData(
            "reservations/api/reservations/create",
            "POST",
            body
        );

        if (!response || !response.success) {
            throw new Error(response?.message || "Error al crear la reserva");
        }

        return response.data;
    } catch (error) {
        console.error("Error al crear la reserva:", error);
        throw error;
    }
}

export async function getAllSources() {
    try {
        const response = await fetchData("source/api/sources/", "GET", null);
        return response.data;
    } catch (error) {
        console.error("Error al obtener las sources:", error);
        throw error;
    }
}
