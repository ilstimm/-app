package software.project.project;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InformationService {

    @Autowired
    private InformationRepository repository;

    public Information getInformation(String user, int order) {
        return repository.findByUserAndOrder(user, order);
    }

    public List<Information> getInformation(String user) {
        return repository.findByUser(user);
    }

    public List<Information> getAllInformation() {
        return repository.findAll();
    }

    public Information createInformation(Information request) {
        Information Information = new Information();

        Information.setId(request.getId());
        Information.setUser(request.getUser());
        Information.setTitle(request.getTitle());
        Information.setName(request.getName());
        Information.setSex(request.getSex());
        Information.setAge(request.getAge());
        Information.setType(request.getType());
        Information.setRegion(request.getRegion());
        Information.setPhoneNumber(request.getPhoneNumber());
        Information.setEmail(request.getEmail());
        Information.setIntroduction(request.getIntroduction());
        Information.setEducation(request.getEducation());
        Information.setCreateTime(request.getCreateTime());
        Information.setRefreshTime(request.getRefreshTime());
        Information.setOrder(request.getOrder());

        return repository.insert(Information);
    }

    public Information replaceInformation(String user, int order, Information request) {
        Information oldInformation = getInformation(user, order);

        Information Information = new Information();
        Information.setId(oldInformation.getId());
        Information.setUser(oldInformation.getUser());
        Information.setTitle(request.getTitle());
        Information.setName(request.getName());
        Information.setSex(request.getSex());
        Information.setAge(request.getAge());
        Information.setType(request.getType());
        Information.setRegion(request.getRegion());
        Information.setPhoneNumber(request.getPhoneNumber());
        Information.setEmail(request.getEmail());
        Information.setIntroduction(request.getIntroduction());
        Information.setEducation(request.getEducation());
        Information.setCreateTime(request.getCreateTime());
        Information.setRefreshTime(request.getRefreshTime());
        Information.setOrder(oldInformation.getOrder());

        return repository.save(Information);
    }

    public void deleteInformation(String user, int order) {
        repository.deleteByUserAndOrder(user, order);
        for (int i = 1; i < 5; ++i) {
            Information oldInformation = getInformation(user, order + i);
            if (oldInformation == null)
                break;
            oldInformation.setOrder(oldInformation.getOrder() - 1);
            repository.save(oldInformation);
        }
    }
}