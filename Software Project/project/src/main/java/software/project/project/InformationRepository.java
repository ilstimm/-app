package software.project.project;


import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InformationRepository extends MongoRepository<Information, String> {
    Information findByUserAndOrder(String user, int order);
    List<Information> findByUser(String user);
    Information deleteByUserAndOrder(String user, int order);
}