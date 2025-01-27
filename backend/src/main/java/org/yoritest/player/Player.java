package org.yoritest.player;

import jakarta.persistence.*;
import lombok.*;

@Entity(name = "players")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = true)
    private String email;
}