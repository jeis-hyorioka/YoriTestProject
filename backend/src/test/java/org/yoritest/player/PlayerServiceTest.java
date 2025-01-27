package org.yoritest.player;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class PlayerServiceTest {

    PlayerService playerService;
    PlayerRepository playerRepositoryMock;

    @BeforeEach
    void setUp() {
        playerRepositoryMock = mock(PlayerRepository.class);
        playerService = new PlayerService(playerRepositoryMock); // Lombokによるコンストラクタを手動で呼び出し
    }

    @Test
    void create_player() {
        String name = "John Doe";
        String email = "john@example.com";

        Player player = Player.builder()
                .name(name)
                .email(email).build();

        when(playerRepositoryMock.save(player)).thenReturn(player);

        playerService.savePlayer(new PlayerRequest(name));

        ArgumentCaptor<Player> playerArgumentCaptor = ArgumentCaptor.forClass(Player.class);
        verify(playerRepositoryMock).save(playerArgumentCaptor.capture());

        Player savedPlayer = playerArgumentCaptor.getValue();
        assertEquals(name, savedPlayer.getName());
        assertEquals(email, savedPlayer.getEmail());
    }

    @Test
    void get_players() {
        playerService.getPlayers();
        verify(playerRepositoryMock).findAll();
    }

    @Test
    void delete_player() {
        Long id = 1L;
        playerService.deletePlayer(id);
        verify(playerRepositoryMock).deleteById(id);
    }

    @Test
    void update_player() {
        Long id = 1L;
        String name = "John Doe";
        String email = "test@exsample.com";
        Player player = Player.builder()
                .name(name)
                .email(email).build();
        when(playerRepositoryMock.findById(id)).thenReturn(java.util.Optional.of(player));
        playerService.updatePlayer(id, new PlayerRequest(name));
        verify(playerRepositoryMock).save(player);
    }
}