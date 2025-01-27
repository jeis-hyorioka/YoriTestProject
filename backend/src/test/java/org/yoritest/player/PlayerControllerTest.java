package org.yoritest.player;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.web.servlet.MockMvc;

import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(PlayerController.class)
@ContextConfiguration(classes = PlayerController.class)
@ActiveProfiles("test")
class PlayerControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    ObjectMapper objectMapper;

    @MockBean
    private PlayerService playerService;

    @Test
    void calls_player_service_to_get_players() throws Exception {
        mockMvc.perform(get("/api/v1/players"))
                .andExpect(status().isOk());
        verify(playerService, Mockito.times(1)).getPlayers();
    }

    @Test
    void calls_player_service_to_save_new_player() throws Exception {
        PlayerRequest playerRequest = new PlayerRequest("John Doe");
        when(playerService.savePlayer(playerRequest)).thenReturn(new Player(1L, "John Doe", ""));

        mockMvc.perform(post("/api/v1/players")
                        .content(objectMapper.writeValueAsString(playerRequest))
                        .contentType("application/json"))
                .andExpect(status().isOk());

        verify(playerService, Mockito.times(1)).savePlayer(playerRequest);
    }

    @Test
    void calls_player_service_to_delete_player() throws Exception {
        mockMvc.perform(delete("/api/v1/players/1"))
                .andExpect(status().isOk());

        verify(playerService, Mockito.times(1)).deletePlayer(1L);
    }

    @Test
    void calls_player_service_to_update_player() throws Exception {
        PlayerRequest playerRequest = new PlayerRequest("John Doe");
        mockMvc.perform(put("/api/v1/players/1")
                        .content(objectMapper.writeValueAsString(playerRequest))
                        .contentType("application/json"))
                .andExpect(status().isOk());

        verify(playerService, Mockito.times(1)).updatePlayer(1L, playerRequest);
    }
}