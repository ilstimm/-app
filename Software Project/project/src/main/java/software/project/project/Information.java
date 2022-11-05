package software.project.project;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "informations")
public class Information {
    private String id; // MongoDB ID
    private String user; // 用戶名
    private String title; // 主旨
    private String name; // 姓名
    private String sex; // 性別
    private int age; // 年齡 
    private String type; // 工作種類
    private String region; // 地區
    private String phoneNumber; // 電話號碼
    private String email; // 信箱
    private String introduction; // 自我介紹
    private String education; // 學歷
    private String createTime; // 創立時間
    private String refreshTime; // 更新時間
    private int order; // 序號 ( 最多三個 )
    
    // set parameter
    public void setId(String id){
        this.id = id;
    }
    public void setUser(String user){
        this.user = user;
    }
    public void setTitle(String title){
        this.title = title;
    }
    public void setName(String name){
        this.name = name;
    }
    public void setSex(String sex){
        this.sex = sex;
    }
    public void setAge(int age){
        this.age = age;
    }
    public void setType(String type){
        this.type = type;
    }
    public void setRegion(String region){
        this.region = region;
    }
    public void setPhoneNumber(String phoneNumber){
        this.phoneNumber = phoneNumber;
    }
    public void setEmail(String email){
        this.email = email;
    }
    public void setIntroduction(String introduction){
        this.introduction = introduction;
    }
    public void setEducation(String education){
        this.education = education;
    }
    public void setCreateTime(String createTime){
        this.createTime = createTime;
    }
    public void setRefreshTime(String refreshTime){
        this.refreshTime = refreshTime;
    }
    public void setOrder(int order){
        this.order = order;
    }

    // get parameter
    public String getId(){
        return id;
    }
    public String getUser(){
        return user;
    }
    public String getTitle(){
        return title;
    }
    public String getName(){
        return name;
    }
    public String getSex(){
        return sex;
    }
    public int getAge(){
        return age;
    }
    public String getType(){
        return type;
    }
    public String getRegion(){
        return region;
    }
    public String getPhoneNumber(){
        return phoneNumber;
    }
    public String getEmail(){
        return email;
    }
    public String getIntroduction(){
        return introduction;
    }
    public String getEducation(){
        return education;
    }
    public String getCreateTime(){
        return createTime;
    }
    public String getRefreshTime(){
        return refreshTime;
    }
    public int getOrder(){
        return order;
    }
}
