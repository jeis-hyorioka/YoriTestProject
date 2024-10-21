package org.yoritest.player;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class PlayerService {

    private final PlayerRepository playerRepository;

    public List<Player> getPlayers() {
        return playerRepository.findAll();
    }

    public Player savePlayer(PlayerRequest playerRequest) {

        Player player = Player.builder()
                .name(playerRequest.name())
                .email(playerRequest.email())
                .build();

        return playerRepository.save(player);
    }

    public void deletePlayer(Long id) {
        playerRepository.deleteById(id);
    }

    public void updatePlayer(Long id, PlayerRequest playerRequest) {
        Player player = playerRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Player not found"));
        player.setName(playerRequest.name());
        player.setEmail(playerRequest.email());
        playerRepository.save(player);
    }
}
